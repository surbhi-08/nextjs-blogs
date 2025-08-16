import React from 'react';
import Image from 'next/image';
import styles from './PostCard.module.scss';
import Link from 'next/link';
import { Post } from '@/type/post';

interface PostCardProps {
    post: Post;
}

const PostCard: React.FC<PostCardProps> = ({ post }) => {
    return (
        <Link href={`/posts/${post.id}`} className={styles.card}>
            <div className={styles.imageWrapper}>
                {/* I use Next.js Image component for performance optimization */}
                <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    style={{ objectFit: 'cover' }}
                />
            </div>
            <div className={styles.content}>
                <p className={styles.category}>{post.category}</p>
                <h3 className={styles.title}>{post.title}</h3>
                <p className={styles.description}>{post.description}</p>
                <div className={styles.meta}>
                    <p className={styles.author}>{post.author}</p>
                    <p className={styles.date}>{post.date}</p>
                </div>
            </div>
        </Link>
    );
};

export default PostCard;