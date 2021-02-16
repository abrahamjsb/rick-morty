import React from "react";
import {
  CardStyled,
  CardPhotoContainer,
  CardDescription,
} from "./styled-components";

export default function Card({ data }) {
  return (
    <CardStyled>
      <CardPhotoContainer>
        <img src={data?.image} alt={data?.name} />
        <figcaption>
          <h3>{data?.name}</h3>
        </figcaption>
      </CardPhotoContainer>
      <CardDescription>
        <li>
          <span>Status</span>{" "}
          <span className="description-card-value">{data?.status || "-"}</span>
        </li>
        <li>
          <span>Species</span>{" "}
          <span className="description-card-value">{data?.species || "-"}</span>
        </li>
        <li>
          <span>Gender</span>{" "}
          <span className="description-card-value">{data?.gender || "-"}</span>
        </li>
        <li>
          <span>Origin</span>{" "}
          <span className="description-card-value">
            {data?.origin?.name || "-"}
          </span>
        </li>
        <li>
          <span>Last Location</span>{" "}
          <span className="description-card-value">
            {data?.location?.name || "-"}
          </span>
        </li>
      </CardDescription>
    </CardStyled>
  );
}
