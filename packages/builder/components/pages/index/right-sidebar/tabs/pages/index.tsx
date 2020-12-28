import { Box, Button, HStack, Text, VStack } from "@chakra-ui/react";
import dynamic from "next/dynamic";
import React, { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCurrentPageData, getSiteData } from "selectors/site";
import { setCurrentPageId } from "slices/site";

const LazyAddPage = dynamic(
  () =>
    import(
      /* webpackChunkName: 'lazyAddPage' */ "components/pages/index/right-sidebar/tabs/pages/add-page"
    ),
  {
    ssr: false,
    loading: () => {
      return <Button size="sm" isLoading />;
    },
  }
);

const LazyManagePages = dynamic(
  () =>
    import(
      /* webpackChunkName: 'lazyManagePages' */ "components/pages/index/right-sidebar/tabs/pages/manage-pages"
    ),
  {
    ssr: false,
    loading: () => {
      return <Button size="sm" isLoading />;
    },
  }
);

const RightSidebarPagesTab: FC = () => {
  const dispatch = useDispatch();
  const { pages } = useSelector(getSiteData());
  const currentPageId = useSelector(getCurrentPageData());

  const pagesNode = () => {
    return pages.map((page, index: number) => {
      return (
        <Box
          key={index}
          as="button"
          onClick={() => dispatch(setCurrentPageId(index))}
          bg={index === currentPageId ? "brand.700" : "brand.900"}
          alignItems="center"
          w="100%"
          rounded="lg"
          _hover={{
            shadow: "lg",
          }}
        >
          <Text px={2} py={1} fontWeight="bold" textAlign="left" fontSize="sm">
            {page.meta.id}.html
          </Text>
        </Box>
      );
    });
  };

  return (
    <VStack spacing={2}>
      <HStack spacing={4} justifyContent="flex-end" w="100%">
        <LazyManagePages />
        <LazyAddPage />
      </HStack>
      {pagesNode()}
    </VStack>
  );
};

export default RightSidebarPagesTab;
