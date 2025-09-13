import type { Schema, Struct } from '@strapi/strapi';

export interface ContentDescriptionSection extends Struct.ComponentSchema {
  collectionName: 'components_content_description_sections';
  info: {
    description: 'A reusable description section with title, rich text content, and alignment options';
    displayName: 'Description Section';
  };
  attributes: {
    alignment: Schema.Attribute.Enumeration<
      ['left', 'center', 'right', 'justify']
    > &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'left'>;
    content: Schema.Attribute.RichText & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

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
      'content.description-section': ContentDescriptionSection;
      'content.image': ContentImage;
      'content.rich-text': ContentRichText;
      'content.video': ContentVideo;
    }
  }
}
