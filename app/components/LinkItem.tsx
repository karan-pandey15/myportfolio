// components/LinkItem.tsx
type LinkItemProps = {
    label: string;
    url: string;
  };
  
  const LinkItem: React.FC<LinkItemProps> = ({ label, url }) => {
    return (
      <p className="mb-2">
        <span className="font-semibold">{label}: </span>
        <a href={url} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
          {url}
        </a>
      </p>
    );
  };
  
  export default LinkItem;
  