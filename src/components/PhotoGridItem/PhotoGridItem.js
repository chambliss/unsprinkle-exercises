import React from "react";
import styled from "styled-components/macro";

const PhotoGridItem = ({ id, src, alt, tags }) => {
  return (
    <article>
      <Anchor href={`/photos/${id}`}>
      {/* Copy-pasted directly from the solution...not sure why it's not 
      working! */}
        <picture>
          <source
            type="image/avif"
            srcSet={`
              ${src} 1x,
              ${src.replace('.jpg', '@2x.avif')} 2x,
              ${src.replace('.jpg', '@3x.avif')} 3x
            `}
          />
          <source
            type="image/jpeg"
            srcSet={`
              ${src} 1x,
              ${src.replace('.jpg', '@2x.jpg')} 2x,
              ${src.replace('.jpg', '@3x.jpg')} 3x
            `}
          />
          <Image src={src} />
        </picture>
      </Anchor>
      <Tags>
        {tags.map((tag) => (
           <Tag key={tag}>{tag}</Tag>
         ))}
       </Tags>
     </article>
   );
};

const Anchor = styled.a`
  text-decoration: none;
  color: inherit;
  outline-offset: 4px;
`;

const Image = styled.img`
  display: block;
  width: 100%;
  max-height: 100%;
  border-radius: 2px;
  margin-bottom: 8px;
  aspect-ratio: 1 / 1;
  object-fit: cover;
`;

const Tags = styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 8px;
`;

const Tag = styled.li`
  padding: 4px 8px;
  background: var(--color-gray-300);
  font-size: 0.875rem;
  font-weight: 475;
  color: var(--color-gray-800);
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  max-width: 50%;
`;

export default PhotoGridItem;
