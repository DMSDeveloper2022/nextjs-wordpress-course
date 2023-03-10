import { BlockRenderer } from "../BlockRenderer";
import { MainMenu } from "../MainMenu";
import { PageWrapper } from "context/page";
import Head from "next/head";

export const Page = (props) => {
  console.log("PAGE PROPS:", props);
  return (
    <PageWrapper
      value={{
        title: props.title,
        featuredImage: props.featuredImage,
        propertyFeatures: props.propertyFeatures,
      }}
    >
      <Head>
        <title>{props.seo.title}</title>
        <meta name="description" content={props.seo.metaDesc} />
      </Head>
      <MainMenu
        items={props.mainMenuItems}
        callToActionLabel={props.callToActionLabel}
        callToActionDestination={props.callToActionDestination}
      />
      <BlockRenderer blocks={props.blocks} />
    </PageWrapper>
  );
};
