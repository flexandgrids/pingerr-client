import React from "react";

export const formatText = (text: string) => {
  const elements: React.ReactNode[] = [];
  let lastIndex = 0;

  const regex = /(```[\s\S]+?```|`([^`]+)`|\*\*(.*?)\*\*|# (.+))/g;

  let match;
  while ((match = regex.exec(text)) !== null) {
    const beforeText = text.slice(lastIndex, match.index);
    if (beforeText) elements.push(<span key={lastIndex}>{beforeText}</span>);

    if (match[1]?.startsWith("```")) {
      elements.push(
        <pre
          key={match.index}
          className="bg-gray-900 text-white p-2 rounded-md w-full overflow-auto"
        >
          <code className="text-xs">{match[1].replace(/```/g, "")}</code>
        </pre>
      );
    } else if (match[2]) {
      elements.push(
        <code
          key={match.index}
          className="bg-gray-200 text-orange-500 px-1 rounded"
        >
          {match[2]}
        </code>
      );
    } else if (match[3]) {
      elements.push(
        <strong key={match.index} className="font-bold">
          {match[3]}
        </strong>
      );
    } else if (match[4]) {
      elements.push(
        <h2 key={match.index} className="text-lg font-bold mt-2 mb-1">
          {match[4]}
        </h2>
      );
    }

    lastIndex = match.index + match[0].length;
  }

  const finalText = text.slice(lastIndex);
  if (finalText) elements.push(<span key="final">{finalText}</span>);

  return elements;
};
