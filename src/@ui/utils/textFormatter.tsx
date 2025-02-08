import React from "react";

export const formatText = (text: string) => {
  const elements: React.ReactNode[] = [];
  let lastIndex = 0;
  const regex =
    /(```[\s\S]+?```|`([^`]+)`|\*\*(.*?)\*\*|\*(.*?)\*|_(.*?)_|~~(.*?)~~|^#{1,6}\s(.+)|\n|(\d+\.\s.+)|^[-*]\s(.+)|\[(.*?)\]\((.*?)\)|((?:\|.+?\|(?:\n|$))+))/gm;

  let match;
  let listItems: React.ReactNode[] = [];
  let isOrderedList = false;
  let isUnorderedList = false;

  while ((match = regex.exec(text)) !== null) {
    const beforeText = text.slice(lastIndex, match.index);
    if (beforeText) elements.push(<span key={lastIndex}>{beforeText}</span>);

    if (match[1]?.startsWith("```")) {
      elements.push(
        <pre
          key={match.index}
          className="bg-gray-900 text-white p-2 rounded-md max-w-[400px] w-auto overflow-auto"
        >
          <code className="text-xs text-wrap">
            {match[1].replace(/```/g, "")}
          </code>
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
    } else if (match[4] || match[5]) {
      elements.push(
        <em key={match.index} className="italic">
          {match[4] || match[5]}
        </em>
      );
    } else if (match[6]) {
      elements.push(
        <s key={match.index} className="line-through">
          {match[6]}
        </s>
      );
    } else if (match[7]) {
      const headingLevel = match[7].split(" ")[0].length;
      const HeadingTag = `h${headingLevel}` as keyof JSX.IntrinsicElements;
      elements.push(
        <HeadingTag key={match.index} className="font-bold mt-2 mb-1">
          {match[7].replace(/^#+\s/, "")}
        </HeadingTag>
      );
    } else if (match[8]) {
      isOrderedList = true;
      listItems.push(
        <li key={match.index} className="list-decimal ml-6">
          {match[8].replace(/^\d+\.\s/, "")}
        </li>
      );
    } else if (match[9]) {
      isUnorderedList = true;
      listItems.push(
        <li key={match.index} className="list-disc ml-6">
          {match[9].replace(/^[-*]\s/, "")}
        </li>
      );
    } else if (match[10] && match[11]) {
      elements.push(
        <a
          key={match.index}
          href={match[11]}
          className="text-blue-500 underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          {match[10]}
        </a>
      );
    } else if (match[12]) {
      const tableRows = match[12].trim().split("\n");
      const tableHeader = tableRows[0]
        .split("|")
        .filter((cell) => cell.trim())
        .map((cell, index) => (
          <th key={index} className="border p-2 bg-gray-200">
            {cell.trim()}
          </th>
        ));

      const tableBody = tableRows.slice(1).map((row, rowIndex) => {
        const rowData = row
          .split("|")
          .filter((cell) => cell.trim())
          .map((cell, colIndex) => (
            <td key={colIndex} className="border p-2">
              {cell.trim()}
            </td>
          ));
        return <tr key={rowIndex}>{rowData}</tr>;
      });

      elements.push(
        <table key={match.index} className="border-collapse border w-full mt-2">
          <thead>
            <tr>{tableHeader}</tr>
          </thead>
          <tbody>{tableBody}</tbody>
        </table>
      );
    } else if (match[0] === "\n") {
      elements.push(<br key={match.index} />);
    }

    lastIndex = match.index + match[0].length;
  }

  if (listItems.length > 0) {
    if (isOrderedList) {
      elements.push(<ol key="ordered-list">{listItems}</ol>);
    } else if (isUnorderedList) {
      elements.push(<ul key="unordered-list">{listItems}</ul>);
    }
  }

  const finalText = text.slice(lastIndex);
  if (finalText) elements.push(<span key="final">{finalText}</span>);

  return elements;
};
