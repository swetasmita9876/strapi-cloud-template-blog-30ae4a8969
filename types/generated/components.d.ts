import type { Schema, Struct } from '@strapi/strapi';

export interface ColumnsColumns extends Struct.ComponentSchema {
  collectionName: 'components_columns_columns';
  info: {
    description: '';
    displayName: 'columns';
  };
  attributes: {
    imgGroup: Schema.Attribute.Component<'img-group.img-group', true>;
    textGroup: Schema.Attribute.Component<'text-group.text-group', true>;
  };
}

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

export interface ImageGroupImageGroup extends Struct.ComponentSchema {
  collectionName: 'components_image_group_image_groups';
  info: {
    displayName: 'image-group';
  };
  attributes: {};
}

export interface ImageGroupImageGrp extends Struct.ComponentSchema {
  collectionName: 'components_image_group_image_grps';
  info: {
    displayName: 'image-grp';
  };
  attributes: {};
}

export interface ImgGroupImgGroup extends Struct.ComponentSchema {
  collectionName: 'components_img_group_img_groups';
  info: {
    description: '';
    displayName: 'img-group';
  };
  attributes: {
    image: Schema.Attribute.Media<'images', true> & Schema.Attribute.Required;
    isProduct: Schema.Attribute.Boolean &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<true>;
    productSlug: Schema.Attribute.String & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface LinksProductLinksProduct extends Struct.ComponentSchema {
  collectionName: 'components_links_product_links_products';
  info: {
    displayName: 'linksProduct';
  };
  attributes: {
    href: Schema.Attribute.String & Schema.Attribute.Required;
    isProduct: Schema.Attribute.Boolean &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<false>;
    label: Schema.Attribute.String & Schema.Attribute.Required;
    slug: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique;
  };
}

export interface LinksLinks extends Struct.ComponentSchema {
  collectionName: 'components_links_links';
  info: {
    displayName: 'links';
  };
  attributes: {
    href: Schema.Attribute.String & Schema.Attribute.Required;
    label: Schema.Attribute.String & Schema.Attribute.Required;
    slug: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface NavitemsNavitems extends Struct.ComponentSchema {
  collectionName: 'components_navitems_navitems';
  info: {
    description: '';
    displayName: 'navitems';
  };
  attributes: {
    columns: Schema.Attribute.Component<'columns.columns', true>;
    label: Schema.Attribute.String & Schema.Attribute.Required;
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

export interface ProductLinkProductLink extends Struct.ComponentSchema {
  collectionName: 'components_product_link_product_links';
  info: {
    displayName: 'productLink';
  };
  attributes: {
    isProduct: Schema.Attribute.Boolean &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<false>;
    label: Schema.Attribute.String & Schema.Attribute.Required;
    slug: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SectionsSections extends Struct.ComponentSchema {
  collectionName: 'components_sections_sections';
  info: {
    displayName: 'sections';
  };
  attributes: {
    links: Schema.Attribute.Component<'links.links', true>;
    title: Schema.Attribute.String & Schema.Attribute.Required;
    type: Schema.Attribute.Enumeration<['text-group', 'image-group']> &
      Schema.Attribute.Required;
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

export interface TextGroupTextGroup extends Struct.ComponentSchema {
  collectionName: 'components_text_group_text_groups';
  info: {
    description: '';
    displayName: 'text-group';
  };
  attributes: {
    productLink: Schema.Attribute.Component<'product-link.product-link', true>;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'columns.columns': ColumnsColumns;
      'icons.icons': IconsIcons;
      'image-group.image-group': ImageGroupImageGroup;
      'image-group.image-grp': ImageGroupImageGrp;
      'img-group.img-group': ImgGroupImgGroup;
      'links-product.links-product': LinksProductLinksProduct;
      'links.links': LinksLinks;
      'navitems.navitems': NavitemsNavitems;
      'og.og': OgOg;
      'ogtwitter.og-twitter': OgtwitterOgTwitter;
      'ogtwitter.ogtwitter': OgtwitterOgtwitter;
      'optional.optional': OptionalOptional;
      'product-link.product-link': ProductLinkProductLink;
      'sections.sections': SectionsSections;
      'seohome.seohome': SeohomeSeohome;
      'shared.media': SharedMedia;
      'shared.quote': SharedQuote;
      'shared.rich-text': SharedRichText;
      'shared.slider': SharedSlider;
      'text-group.text-group': TextGroupTextGroup;
    }
  }
}
