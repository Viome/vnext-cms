import type { Schema, Struct } from '@strapi/strapi';

export interface ContentImage extends Struct.ComponentSchema {
  collectionName: 'components_content_images';
  info: {
    displayName: 'Image';
  };
  attributes: {
    alt: Schema.Attribute.String;
    media: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface ContentRichText extends Struct.ComponentSchema {
  collectionName: 'components_content_rich_texts';
  info: {
    displayName: 'Rich Text';
    icon: 'apps';
  };
  attributes: {
    body: Schema.Attribute.Blocks;
  };
}

export interface ContentVideo extends Struct.ComponentSchema {
  collectionName: 'components_content_videos';
  info: {
    displayName: 'Video';
  };
  attributes: {
    file: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    source: Schema.Attribute.Enumeration<['upload', 'youtube', 'vimeo', 'url']>;
    url: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'content.image': ContentImage;
      'content.rich-text': ContentRichText;
      'content.video': ContentVideo;
    }
  }
}
