// src/components/Title.tsx
import React from "react";

type Props = {
  content: string;
};

export default function Title({ content }: Props) {
  return <h1>{content}</h1>;
}
