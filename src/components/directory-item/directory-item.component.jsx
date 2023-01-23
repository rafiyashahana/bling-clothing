import {
  DirectoryItemContainer,
  BackgroundImage,
  DirectoryItemBodyContainer,
} from "./directory-item.styles";

const DirectoryItem = ({ category }) => {
  const { title, imageUrl } = category;
  return (
    <DirectoryItemContainer>
      <BackgroundImage imageUrl={imageUrl} />
      <DirectoryItemBodyContainer>
        <h2>{title}</h2>
        <p>Shop Now</p>
      </DirectoryItemBodyContainer>
    </DirectoryItemContainer>
  );
};
export default DirectoryItem;
