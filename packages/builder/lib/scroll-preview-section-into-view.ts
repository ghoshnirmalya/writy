const scrollPreviewSectionIntoView = (
  currentPageId: number,
  positionOfSection: number
) => {
  const iframeContent: any = document.getElementById(
    `js-preview-iframe-page-${currentPageId}`
  );

  const timeout = setTimeout(() => {
    iframeContent.contentWindow.document
      .getElementById(`section-${positionOfSection}`)
      ?.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "start",
      });

    clearTimeout(timeout);
  }, 0);
};

export default scrollPreviewSectionIntoView;
