import { useState, useEffect } from "react";
import StepWizard from "react-step-wizard";

function Footer() {
  return (
    <div className="absolute rounded-t-lg bottom-0 left-0 p-4 w-full bg-gray-100">
      <p>
        I hope this quiz helped you. If this saved you some cash,{" "}
        <a
          className="text-blue-500 underline"
          href="https://buymeacoffee.com/mattei"
          target="_blank"
          rel="noreferrer"
        >
          send me money
        </a>{" "}
        or{" "}
        <a
          className="text-blue-500 underline"
          href="https://twitter.com/matteing"
          target="_blank"
          rel="noreferrer"
        >
          follow me on Twitter
        </a>
        .
      </p>
    </div>
  );
}

function StepOne({ nextStep }) {
  return (
    <div>
      <h1 className="font-catamaran text-4xl font-bold mb-3">
        Should I buy this today?!
      </h1>
      <p className="text-gray-600 text-xl">
        So you&apos;ve found something you <i>absolutely need right now</i>.
      </p>
      <p className="text-xl text-gray-500 mb-6">
        This quiz will help you objectively™ evaluate whether this item is a
        great purchase.
      </p>
      <button
        onClick={nextStep}
        className="py-4 px-6 text-xl uppercase text-white rounded-lg bg-black inline-flex hover:bg-gray-900"
      >
        Take the quiz
      </button>
    </div>
  );
}

function StepTwo({ nextStep, goToStep }) {
  return (
    <div>
      <h1 className="font-catamaran text-4xl font-bold mb-3">Step 1: Think</h1>
      <p className="text-gray-600 text-xl mb-6">
        Do you see yourself using this product daily?
      </p>
      <ul className="space-y-3">
        <li>
          <button
            onClick={nextStep}
            className="py-4 px-6 text-xl border rounded-lg inline-flex hover:bg-gray-100"
          >
            This will change my life
          </button>
        </li>
        <li>
          <button
            onClick={() => goToStep("no")}
            className="py-4 px-6 text-xl border rounded-lg inline-flex hover:bg-gray-100"
          >
            This is useless
          </button>
        </li>
      </ul>
    </div>
  );
}

function StepThree({ nextStep, goToStep }) {
  return (
    <div>
      <h1 className="font-catamaran text-4xl font-bold mb-3">
        Step 2: Research
      </h1>
      <p className="text-gray-600 text-xl mb-6">
        Does Googling "(product name) Reddit" yield favorable results?
      </p>
      <ul className="space-y-3">
        <li>
          <button
            onClick={() => goToStep("superNo")}
            className="py-4 px-6 text-xl border rounded-lg inline-flex hover:bg-gray-100"
          >
            Yes, experts at Reddit rave about it
          </button>
        </li>
        <li>
          <button
            onClick={nextStep}
            className="py-4 px-6 text-xl border rounded-lg inline-flex hover:bg-gray-100"
          >
            They hate it
          </button>
        </li>
      </ul>
    </div>
  );
}

function StepFour({ goToStep }) {
  return (
    <div>
      <h1 className="font-catamaran text-4xl font-bold mb-3">
        Step 3: Classify
      </h1>
      <p className="text-gray-600 text-xl mb-6">
        Is the item a{" "}
        <a
          className="text-blue-500 underline"
          href="https://www.amazon.com/Toshiba-TRCS01-Uncooked-One-Touch-Porridge/dp/B0838SMXFZ/ref=sr_1_1_sspa?crid=2BZ9QJLZD8Y6Z&dchild=1&keywords=japanese+rice+cooker&qid=1629731713&sprefix=japanese+ric%2Caps%2C229&sr=8-1-spons&psc=1&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUExUFlOOFNMUzdYM1hWJmVuY3J5cHRlZElkPUEwNDAwNTQwMkJNSUlEQ1UwTFFFMSZlbmNyeXB0ZWRBZElkPUEwMzE3MDU5M0FSNzkzUFlGNlBRWSZ3aWRnZXROYW1lPXNwX2F0ZiZhY3Rpb249Y2xpY2tSZWRpcmVjdCZkb05vdExvZ0NsaWNrPXRydWU="
          target="_blank"
          rel="noreferrer"
        >
          rice cooker
        </a>{" "}
        or similar?
      </p>
      <ul className="space-y-3">
        <li>
          <button
            onClick={() => goToStep("maybe")}
            className="py-4 px-6 text-xl border rounded-lg inline-flex hover:bg-gray-100"
          >
            Yes, item cooks rice
          </button>
        </li>
        <li>
          <button
            onClick={() => goToStep("no")}
            className="py-4 px-6 text-xl border rounded-lg inline-flex hover:bg-gray-100"
          >
            No
          </button>
        </li>
      </ul>
    </div>
  );
}

function StepNo() {
  return (
    <div className="h-screen w-screen">
      <div className="font-bold" style={{ fontSize: "50vw" }}>
        NO
      </div>
      <Footer />
    </div>
  );
}

function StepSuperNo() {
  return (
    <div className="h-screen w-screen">
      <div
        className="font-bold text-center leading-none"
        style={{ fontSize: "20vw" }}
      >
        SUPER NO
      </div>
      <Footer />
    </div>
  );
}

function StepMaybe() {
  return (
    <div className="h-screen w-screen">
      <div className="font-bold" style={{ fontSize: "20vw" }}>
        MAYBE???
      </div>
      <Footer />
    </div>
  );
}

export default function Home() {
  return (
    <div className="relative flex h-screen w-screen items-center justify-center overflow-hidden">
      <div className="w-8/12">
        <StepWizard isHashEnabled={true}>
          <StepOne />
          <StepTwo />
          <StepThree />
          <StepFour />
          <StepNo hashKey={"no"} />
          <StepSuperNo hashKey={"superNo"} />
          <StepMaybe hashKey={"maybe"} />
        </StepWizard>
      </div>
    </div>
  );
}
