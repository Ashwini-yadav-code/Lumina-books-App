
import React from 'react';
import { Book } from '../types';

interface CheckoutScreenProps {
  book: Book;
  onBack: () => void;
}

const CheckoutScreen: React.FC<CheckoutScreenProps> = ({ book, onBack }) => {
  return (
    <div className="relative flex flex-col h-full bg-background-dark text-white pb-32">
      <header className="sticky top-0 z-50 flex items-center bg-background-dark/95 backdrop-blur-md p-4 border-b border-white/5">
        <button onClick={onBack} className="text-white flex size-12 items-center justify-center rounded-full hover:bg-white/10">
          <span className="material-symbols-outlined">arrow_back</span>
        </button>
        <h2 className="text-lg font-bold flex-1 text-center pr-12">Checkout</h2>
      </header>

      <div className="flex-1 overflow-y-auto no-scrollbar px-5">
        <div className="flex items-center justify-between pb-4 pt-6">
          <h2 className="text-2xl font-bold">Order Summary</h2>
          <button className="text-primary text-sm font-bold">Edit Cart</button>
        </div>

        <div className="mb-4 relative flex items-stretch gap-4 rounded-xl bg-surface-dark p-3 border border-white/5 overflow-hidden">
          <div className="h-28 w-[84px] shrink-0 overflow-hidden rounded-lg bg-gray-800 shadow-md">
            <img className="h-full w-full object-cover" src={book.coverUrl} alt={book.title} />
          </div>
          <div className="flex flex-1 flex-col justify-between py-1">
            <div>
              <div className="flex justify-between items-start gap-2">
                <h3 className="text-lg font-bold leading-tight line-clamp-2">{book.title}</h3>
                <p className="text-lg font-bold text-primary">{book.price || "$12.99"}</p>
              </div>
              <p className="text-sm font-medium text-gray-400 mt-1">{book.author}</p>
            </div>
            <div className="flex items-center justify-between mt-2">
              <span className="px-2.5 py-1 text-xs font-semibold rounded-full bg-white/5 border border-white/5">
                Hardcover
              </span>
              <span className="text-sm font-medium text-gray-500">Qty: 1</span>
            </div>
          </div>
        </div>

        <div className="py-6">
          <h3 className="text-xl font-bold mb-4">Shipping</h3>
          <div className="rounded-xl bg-surface-dark p-4 border border-white/5 group hover:border-primary/30 cursor-pointer">
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                <span className="material-symbols-outlined">location_on</span>
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <p className="font-bold text-base">Home</p>
                  <span className="text-primary text-sm font-bold">Edit</span>
                </div>
                <p className="mt-1 text-sm leading-relaxed text-gray-400">
                  1234 Bookstore Lane, Apt 4B<br/>
                  San Francisco, CA 94110
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="py-2">
          <h3 className="text-xl font-bold mb-4">Payment</h3>
          <div className="rounded-xl bg-surface-dark p-4 border border-white/5 space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="h-9 w-14 rounded-lg bg-slate-800 flex items-center justify-center text-white font-bold text-[10px] tracking-widest">VISA</div>
                <div>
                  <p className="text-sm font-bold">Visa ending in 4242</p>
                  <p className="text-xs text-gray-500">Expires 09/28</p>
                </div>
              </div>
              <div className="h-5 w-5 rounded-full border-[5px] border-primary bg-white"></div>
            </div>
          </div>
        </div>

        <div className="mt-8 mb-8 rounded-xl p-4 border border-dashed border-gray-700">
          <div className="flex justify-between py-1.5 text-sm">
            <span className="text-gray-400">Subtotal</span>
            <span className="font-bold">{book.price || "$12.99"}</span>
          </div>
          <div className="flex justify-between py-1.5 text-sm">
            <span className="text-gray-400">Shipping</span>
            <span className="font-bold">$4.99</span>
          </div>
          <div className="flex justify-between py-1.5 text-sm">
            <span className="text-gray-400">Estimated Tax</span>
            <span className="font-bold">$1.20</span>
          </div>
          <div className="my-3 h-px bg-white/10"></div>
          <div className="flex justify-between items-end py-1">
            <span className="text-base font-bold">Grand Total</span>
            <span className="text-2xl font-bold text-primary tracking-tight">$19.18</span>
          </div>
        </div>
      </div>

      <div className="fixed bottom-0 left-0 w-full bg-background-dark/80 border-t border-white/5 p-5 pb-8 backdrop-blur-xl">
        <button className="group w-full bg-primary hover:bg-primary/90 text-white font-bold py-4 rounded-xl shadow-lg flex items-center justify-between px-6 transition-all">
          <span className="text-lg">Place Order</span>
          <span className="flex items-center gap-3 bg-white/20 px-3 py-1 rounded-lg text-sm font-bold backdrop-blur-sm">
            $19.18
            <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
          </span>
        </button>
      </div>
    </div>
  );
};

export default CheckoutScreen;
