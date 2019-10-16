import React from "react";
import CollectionItemPositioned, {
  GamePositioned
} from "../components/GamePositioned";
import CardModal from "../components/CardModal";
import CardBadge from "../components/CardBadge";
import CardDetails from "../components/CardDetails";
import CardCategories from "../components/CardCategories";
import CardTitle from "../components/CardTitle";
import CardFlip from "../components/CardFlip";

export default {
  title: "DetailCard"
};

export const CardWithImage = () => (
  <CardModal>
    <GamePositioned />
  </CardModal>
);

export const test = () => (
  <CardModal>
    <CollectionItemPositioned />
    <CardFlip>Fest für Odin</CardFlip>
    <CardDetails>
      <CardTitle>Players: 2-4</CardTitle>
      <CardTitle>Time: test</CardTitle>
      <CardTitle>Categories</CardTitle>
      <CardCategories>
        <CardBadge>Economics</CardBadge>
        <CardBadge>Sci-Fi</CardBadge>
        <CardBadge>Territory-Building</CardBadge>
      </CardCategories>
      <CardTitle>Mechanics</CardTitle>
      <CardCategories>
        <CardBadge>Area Control</CardBadge>
        <CardBadge>Route/Network Building</CardBadge>
      </CardCategories>
    </CardDetails>
  </CardModal>
);
