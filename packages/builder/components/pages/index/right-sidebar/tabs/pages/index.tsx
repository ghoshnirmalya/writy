import {
  Box,
  Button,
  HStack,
  Text,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";
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
  const activePageBgColor = useColorModeValue("gray.100", "brand.700");

  const pagesNode = () => {
    return (
      <VStack spacing={1} w="100%">
        {pages.map((page, index: number) => {
          return (
            <Box
              key={index}
              as="button"
              onClick={() => dispatch(setCurrentPageId(index))}
              bg={index === currentPageId ? activePageBgColor : "transparent"}
              alignItems="center"
              w="100%"
              rounded="lg"
            >
              <Text
                px={2}
                py={1}
                fontWeight="bold"
                textAlign="left"
                fontSize="sm"
              >
                {page.meta.id}.html
              </Text>
            </Box>
          );
        })}
      </VStack>
    );
  };

  return (
    <VStack spacing={4}>
      <HStack spacing={4} justifyContent="flex-end" w="100%">
        <LazyManagePages />
        <LazyAddPage />
      </HStack>
      {pagesNode()}
    </VStack>
  );
};

export default RightSidebarPagesTab;
