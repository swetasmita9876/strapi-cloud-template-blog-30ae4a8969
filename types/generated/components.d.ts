import type { Schema, Struct } from '@strapi/strapi';

export interface IconsIcons extends Struct.ComponentSchema {
  collectionName: 'components_icons_icons';
  info: {
    displayName: 'icons';
  };
  attributes: {
    appleTouchIcon: Schema.Attribute.Media<'images'> &
      Schema.Attribute.Required;
    favIcon: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    manifest: Schema.Attribute.Media<'images'>;
  };
}

export interface OgOg extends Struct.ComponentSchema {
  collectionName: 'components_og_ogs';
  info: {
    displayName: 'og';
  };
  attributes: {
    ogLocale: Schema.Attribute.String & Schema.Attribute.Required;
    siteName: Schema.Attribute.String & Schema.Attribute.Required;
    type: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface OgtwitterOgTwitter extends Struct.ComponentSchema {
  collectionName: 'components_ogtwitter_og_twitters';
  info: {
    displayName: 'ogTwitter';
  };
  attributes: {
    cardType: Schema.Attribute.String & Schema.Attribute.Required;
    creatorName: Schema.Attribute.String & Schema.Attribute.Required;
    siteName: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface OgtwitterOgtwitter extends Struct.ComponentSchema {
  collectionName: 'components_ogtwitter_ogtwitters';
  info: {
    displayName: 'ogtwitter';
  };
  attributes: {};
}

export interface OptionalOptional extends Struct.ComponentSchema {
  collectionName: 'components_optional_optionals';
  info: {
    displayName: 'optional';
  };
  attributes: {
    alternateUrls: Schema.Attribute.JSON;
    modifiedTime: Schema.Attribute.Date;
    publishedTime: Schema.Attribute.Date & Schema.Attribute.Required;
  };
}

export interface SeohomeSeohome extends Struct.ComponentSchema {
  collectionName: 'components_seohome_seohomes';
  info: {
    description: '';
    displayName: 'seohome';
  };
  attributes: {
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    icons: Schema.Attribute.Component<'icons.icons', false> &
      Schema.Attribute.Required;
    image: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    imageAlt: Schema.Attribute.Text & Schema.Attribute.Required;
    keyword: Schema.Attribute.JSON & Schema.Attribute.Required;
    ogTwitter: Schema.Attribute.Component<'ogtwitter.og-twitter', false> &
      Schema.Attribute.Required;
    openGraph: Schema.Attribute.Component<'og.og', false>;
    optional: Schema.Attribute.Component<'optional.optional', false> &
      Schema.Attribute.Required;
    robots: Schema.Attribute.String & Schema.Attribute.Required;
    schema: Schema.Attribute.JSON;
    siteName: Schema.Attribute.String & Schema.Attribute.Required;
    titlle: Schema.Attribute.String & Schema.Attribute.Required;
    url: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedMedia extends Struct.ComponentSchema {
  collectionName: 'components_shared_media';
  info: {
    displayName: 'Media';
    icon: 'file-video';
  };
  attributes: {
    file: Schema.Attribute.Media<'images' | 'files' | 'videos'>;
  };
}

export interface SharedQuote extends Struct.ComponentSchema {
  collectionName: 'components_shared_quotes';
  info: {
    displayName: 'Quote';
    icon: 'indent';
  };
  attributes: {
    body: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface SharedRichText extends Struct.ComponentSchema {
  collectionName: 'components_shared_rich_texts';
  info: {
    description: '';
    displayName: 'Rich text';
    icon: 'align-justify';
  };
  attributes: {
    body: Schema.Attribute.RichText;
  };
}

export interface SharedSlider extends Struct.ComponentSchema {
  collectionName: 'components_shared_sliders';
  info: {
    description: '';
    displayName: 'Slider';
    icon: 'address-book';
  };
  attributes: {
    files: Schema.Attribute.Media<'images', true>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'icons.icons': IconsIcons;
      'og.og': OgOg;
      'ogtwitter.og-twitter': OgtwitterOgTwitter;
      'ogtwitter.ogtwitter': OgtwitterOgtwitter;
      'optional.optional': OptionalOptional;
      'seohome.seohome': SeohomeSeohome;
      'shared.media': SharedMedia;
      'shared.quote': SharedQuote;
      'shared.rich-text': SharedRichText;
      'shared.slider': SharedSlider;
    }
  }
}
