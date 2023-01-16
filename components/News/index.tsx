import React from "react";
import Image from "next/image";
import useNewsState, { ActionsEnum } from "./useNewsState";
import styles from "./style.module.scss";
import classNames from "classnames";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import Dropdown from "rc-dropdown";
import Menu, { Item as MenuItem } from "rc-menu";
import { Adsense } from "@ctrl/react-adsense";
import Icon from "../shared/icons";

dayjs.extend(relativeTime);

const NEXT_PUBLIC_ADSENSE_KEY = process.env.NEXT_PUBLIC_ADSENSE_KEY;

function News() {
  const {
    isLoading,
    newsList,
    dropdownOptions,
    handleSelectAction,
  } = useNewsState();

  if (isLoading || !newsList) {
    return null;
  }

  return (
    <div className={classNames(styles.news)}>
      <Adsense
        client={`${NEXT_PUBLIC_ADSENSE_KEY}`}
        slot="7466683631"
        format="auto"
        responsive="true"
        style={{ display: "block" }}
      />

      <ul className={styles.list}>
        {newsList.map((news, index) => {
          const {
            id,
            websiteTitle,
            iconUrl,
            mediaThumbnail,
            title,
            lastUpdated,
          } = news;

          const updatedTime = dayjs(lastUpdated).fromNow();

          return (
            <>
              {index === 1 && (
                <li key="adsense" className={styles.item}>
                  <Adsense
                    style={{ display: "block", textAlign: "center" }}
                    layout="in-article"
                    format="fluid"
                    client={`${NEXT_PUBLIC_ADSENSE_KEY}`}
                    slot="2713050408"
                  />
                </li>
              )}
              <li className={styles.item} key={id + websiteTitle}>
                <div className={styles.top}>
                  <span className={styles.title}>{websiteTitle}</span>
                  {mediaThumbnail && (
                    <Image
                      className={classNames(styles.image)}
                      src={mediaThumbnail.url}
                      alt=""
                      width={Number(mediaThumbnail.width)}
                      height={Number(mediaThumbnail.height)}
                    />
                  )}
                </div>
                <div className={classNames(styles.bottom)}>
                  <div>
                    <Image
                      className={classNames(styles.logo)}
                      src={iconUrl}
                      alt=""
                      width={16}
                      height={8}
                    />
                    <span className={classNames(styles.siteTitle)}>
                      {title} - {updatedTime}
                    </span>
                  </div>
                  <div className={classNames(styles.actions)}>
                    <button className={styles.actionButton}>
                      <Icon name="share" />
                    </button>
                    <Dropdown
                      trigger={["click"]}
                      overlay={
                        <Menu
                          onSelect={(option) =>
                            handleSelectAction(news, option.key as ActionsEnum)
                          }
                        >
                          {dropdownOptions.map((option) => (
                            <MenuItem key={option.value}>
                              {option.label}
                            </MenuItem>
                          ))}
                        </Menu>
                      }
                    >
                      <button className={styles.actionButton}>
                        <Icon name="more" />
                      </button>
                    </Dropdown>
                  </div>
                </div>
              </li>
            </>
          );
        })}
      </ul>
    </div>
  );
}

export default News;
