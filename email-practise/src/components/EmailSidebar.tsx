import { Archive, Mail } from "lucide-react";
import { Button } from "./ui/button";
import { useState } from "react";
import MesssageItem from "./MesssageItem";
import { AnimatePresence } from "motion/react";

let titles = [
  {
    id: 1,
    heading: "Apple's newest Iphone is here",
    description: "Watch our July event",
  },
  {
    id: 2,
    heading: "Nintendo's Newsletter for July",
    description: "Introducing Strike, a 5-on-5 soccer game",
  },
  {
    id: 3,
    heading: "Apple's newest Iphone is here",
    description: "Watch our July event",
  },
];

export default function EmailSidebar() {
  const [messages, setMessages] = useState(titles);
  const [selectedMessages, setSelectedMessages] = useState<Number[]>([]);

  function selectMessage(id: number) {
    setSelectedMessages((prev) => [...prev, id]);
  }

  function unSelectMessage(id: number) {
    setSelectedMessages((prev) => prev.filter((item) => item !== id));
  }

  function addMessage() {
    const randomMessageArr = [
      {
        heading: "Microsoft launches new AI-powered Office tools",
        description: "Word and Excel get real-time collaboration with Copilot",
      },
      {
        heading: "Netflix expands into gaming",
        description: "Subscribers can now stream select mobile games for free",
      },
      {
        heading: "SpaceX announces next Mars mission timeline",
        description: "Crewed flights could begin within the next decade",
      },
      {
        heading: "React Hawaii is here!",
        description: "Time for fun in the sun",
      },
      {
        heading: "Google unveils Pixel Watch 2",
        description: "Smarter health tracking and improved battery life",
      },
      {
        heading: "Sony teases next-gen PlayStation VR",
        description: "Immersive gaming with 4K resolution and haptic feedback",
      },
      {
        heading: "Amazon to launch satellite internet service",
        description: "Project Kuiper aims to compete with Starlink globally",
      },
      {
        heading: "Meta introduces Horizon Workrooms upgrade",
        description: "New VR tools designed for hybrid remote teams",
      },
    ];

    let id = messages.length + 1;

    setMessages((prev) => {
      const newArr = [...prev];

      for (let i = 0; i < prev.length; i++) {
        const randomMessageIndex = Math.floor(
          Math.random() * randomMessageArr.length
        );
        const randomMessageItem = randomMessageArr[randomMessageIndex];
        const itemAlreadyInMessages = messages.some(
          (item) => item.heading === randomMessageItem.heading
        );
        if (itemAlreadyInMessages) {
          continue;
        } else {
          newArr.unshift({ id, ...randomMessageItem });
          break;
        }
      }

      return newArr;
    });
  }

  function archiveMessages() {
    setMessages((prev) => {
      const filteredArr = prev.filter((item) => {
        return !selectedMessages.includes(item.id);
      });

      return filteredArr;
    });
    setSelectedMessages([]);
  }

  const messagesEl = messages.map((item, index) => {
    const { heading, description, id } = item;
    return (
      <MesssageItem
        id={id}
        heading={heading}
        description={description}
        key={index}
        selectMessage={selectMessage}
        unSelectMessage={unSelectMessage}
        selectedMessages={selectedMessages}
      />
    );
  });

  return (
    <div className="bg-[#f2f2f2] h-full border-[#e5e5e5] border-r w-2/5 flex flex-col">
      <div className="px-2 py-2 border-b border-[#e5e5e5] flex justify-between">
        <Button size={"icon"} variant={"ghost"} onClick={addMessage}>
          <Mail color="#6E6E6E" />
        </Button>
        <Button size={"icon"} variant={"ghost"} onClick={archiveMessages}>
          <Archive color="#6E6E6E" />
        </Button>
      </div>
      <div className="flex-1 min-h-0 overflow-y-auto">
        <ul className="flex flex-col px-2 py-2">
          <AnimatePresence initial={false}>{messagesEl}</AnimatePresence>
        </ul>
      </div>
    </div>
  );
}
