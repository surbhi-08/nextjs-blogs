'use client';

import React, { useState } from 'react';
import Header from '../components/Header';
import PostCard from '../components/PostCard';
import Footer from '../components/Footer';
import postsData from '../data/posts.json';
import '../styles/globals.scss';
import styles from './page.module.scss';
import SearchIcon from '@/components/icons/SearchIcon';
import Image from 'next/image';
import { Per_Page_Post, Categories } from '@/utils/const';
import { Post } from '@/type/post';

export default function Home() {

  const [searchQuery, setSearchQuery] = useState<string>('');
  const [visiblePostsCount, setVisiblePostsCount] = useState<number>(Per_Page_Post);
  const [activeTab, setActiveTab] = useState<string>("All");

  // Filter posts based on the search query
  const filteredPosts = postsData.filter((post: Post) => {
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.author.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.category.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesTab = activeTab === "All" || post.type === activeTab;

    return matchesSearch && matchesTab;
  });

  //  The filtered posts to only show the number of posts determined by visiblePostsCount
  const visiblePosts = filteredPosts.slice(0, visiblePostsCount);

  // Check if there are more posts to load
  const hasMorePosts = visiblePostsCount < filteredPosts.length;

  // Handle "Load More" button click
  const handleLoadMore = () => {
    setVisiblePostsCount(prevCount => prevCount + Per_Page_Post);
  };

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
    setVisiblePostsCount(Per_Page_Post); // Reset count when changing tabs
  };

  return (
    <>
      <Header />
      <div className={styles.container}>
        <div className={styles.searchTabsContainer}>
          {/* Search Input Section */}
          <div className={styles.searchContainer}>
            <div className={styles.searchInputWrapper}>
              <SearchIcon className={styles.searchIcon} />
              <input
                type="text"
                placeholder="Search posts here..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className={styles.searchInput}
              />
            </div>
          </div>

          {/* Tab section */}
          <div className={styles.tabsContainer}>
            {Categories.map((tab) => (
              <button
                key={tab}
                onClick={() => handleTabClick(tab)}
                className={`${styles.tabChip} ${activeTab === tab ? styles.activeTab : ''}`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* post section */}
        {visiblePosts.length > 0 ? (
          <main className={styles.postGrid}>
            {visiblePosts.map((post: Post) => (
              <PostCard key={post.id} post={post} />
            ))}
          </main>
        ) :
          (
            // No results section
            <>
              <Image
                src={'/images/file.png'}
                alt={'No Blogs found!'}
                fill
                style={{ objectFit: 'cover', width: '50%', height: '50%' }}
              />
              <p className={styles.noResults}>No Blogs found!</p>
            </>
          )}

        {/* Load More button */}
        {hasMorePosts && searchQuery === '' && (
          <div className={styles.loadMoreContainer}>
            <button className={styles.loadMoreButton} onClick={handleLoadMore}>
              Load More
            </button>
          </div>
        )}
      </div>

      <Footer />
    </>
  );
}