'use client';
import { Button } from 'antd';

import Image from 'next/image';

import Link from 'next/link';

import { useAppDispatch } from '@/hooks/useAppDispatch';
import { useAppSelector } from '@/hooks/useAppSelector';
import { decrementCount, incrementCount } from '@/redux/slices/counterSlice';

export default function Counter() {
  const count = useAppSelector(state => state.counter.count);
  const dispatch = useAppDispatch();

  const handleIncrement = () => {
    dispatch(incrementCount());
  };

  const handleDecrement = () => {
    dispatch(decrementCount());
  };
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-6 bg-black text-white">
      <Image
        className="dark:invert"
        src="/next.svg"
        alt="Next.js Logo"
        width={190}
        height={37}
        priority
      />
      <h1 className="text-6xl font-medium">Counter</h1>
      <div className="flex items-center">
        <Button
          type="primary"
          data-testid="subtract-button"
          onClick={handleDecrement}
          className="p-4"
        >
          -
        </Button>
        <div data-testid="count" className="p-4 text-2xl">
          {count}
        </div>
        <Button
          type="primary"
          onClick={handleIncrement}
          data-testid="add-button"
          className="p-4"
        >
          +
        </Button>
      </div>
      <Link
        className="rounded-md border border-white/10 px-3 py-3  text-xl font-medium  transition-all duration-300 ease-in-out hover:border-white/5 hover:bg-white/10"
        href="/"
      >
        Go Back
      </Link>
    </main>
  );
}
