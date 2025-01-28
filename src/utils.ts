export type ButtonSize = "small"| "medium" | "large"

export type ButtonType = "primary" | "secondary"|"tertiary"

export type CardType  = "horizontal" | "vertical"

export const handleCopyToClipboard = ({
  setShowToast,
}: {
  setShowToast: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const currentPath = `${window.location.origin}${window.location.pathname}`;
  navigator.clipboard.writeText(currentPath)
    .then(() => {
      setShowToast(true);
      setTimeout(() => setShowToast(false), 2000);
    })
    .catch(() => {
      alert("Failed to copy link.");
    });
};
