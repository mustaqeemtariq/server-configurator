export const getTotalDisksCount = (selectedDisks) => {
  return Object.values(selectedDisks).reduce(
    (total, item) => item.quantity + total,
    0
  );
};
