"use client";

import React from "react";
import { convertAlphabet, convertNumber } from "./__scripts";

function page() {
  return (
    <div className="text-center mx-auto max-w-4xl">
      <div className="p-4">
        <h1 className="text-3xl font-bold mb-4">アルファベット数字変換</h1>
        <p className="mb-4">
          アルファベットと数字を双方向に変換するツールです。複数を入力する場合、カンマ区切りで入力してください。
        </p>
        <p className="mb-4">例 : B → 2 / 4,8 → D,H</p>
      </div>
      <div className="flex justify-center">
        <div className="w-1/2 p-4 m-2 bg-gray-200 border-solid border-r-2 rounded-lg">
          <h2 className="text-xl font-bold mb-2">アルファベット → 数字</h2>
          <textarea
            id="alphabetInput"
            placeholder="アルファベット(大文字)を入力"
            className="w-full p-2 mb-2 resize-none"
            rows={10}
          />
          <button
            id="convertAlphabet"
            className="w-full p-2 bg-blue-500 text-white mb-2"
            onClick={convertAlphabet}
          >
            変換
          </button>
          <p id="alphabetOutput" className="mb-2"></p>
        </div>
        <div className="w-1/2 p-4 m-2 bg-gray-200 border-solid border-r-2 rounded-lg">
          <h2 className="text-xl font-bold mb-2">数字 → アルファベット</h2>
          <textarea
            id="numberInput"
            placeholder="数字(半角)を入力"
            className="w-full p-2 mb-2 resize-none"
            rows={10}
          />
          <button
            id="convertNumber"
            className="w-full p-2 bg-blue-500 text-white mb-2"
            onClick={convertNumber}
          >
            変換
          </button>
          <p id="numberOutput" className="mb-2"></p>
        </div>
      </div>
    </div>
  );
}

export default page;
