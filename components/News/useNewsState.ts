import { useQuery } from "react-query";
import NewsDto from "./news.type";

export enum ActionsEnum {
  OPEN_IN_NEW_TAB = "open-in-new-tab",
  COPY_LINK_ADDRESS = "copy-link",
  COPY_LINK_TEXT = "copy-text",
}

function useNewsState() {
  const { data, isLoading } = useQuery<NewsDto[]>("repoData", async () => {
    const result = await fetch("/api/news").then(
      async (response) => await response.json()
    );

    return result;
  });

  const dropdownOptions = [
    {
      label: "Open in new tab",
      value: ActionsEnum.OPEN_IN_NEW_TAB,
    },
    {
      label: "Copy link address",
      value: ActionsEnum.COPY_LINK_ADDRESS,
    },
    {
      label: "Copy link text",
      value: ActionsEnum.COPY_LINK_TEXT,
    },
  ];

  const handleSelectAction = (news: NewsDto, action: ActionsEnum) => {};

  return {
    newsList: data,
    isLoading,
    dropdownOptions,
    handleSelectAction,
  };
}

export default useNewsState;
