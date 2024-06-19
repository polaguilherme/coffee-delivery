import { Minus, Plus } from "phosphor-react";

interface QuantityCounterProps {
  quantity: number;
  onIncrement: () => void;
  onDecrement: () => void;
}

export function QuantityCounter({
  quantity,
  onIncrement,
  onDecrement,
}: QuantityCounterProps) {
  return (
    <div className="flex items-center p-2 w-16 bg-base-button justify-center rounded-md">
      <button
        disabled={quantity === 1}
        onClick={onDecrement}
        className="disabled:cursor-not-allowed"
      >
        <Minus className="text-brand-purple font-bold" size={14} />
      </button>
      <input
        value={quantity}
        readOnly
        type="number"
        className="w-full bg-transparent text-center outline-none cursor-default"
      />
      <button onClick={onIncrement}>
        <Plus className="text-brand-purple font-bold" size={14} />
      </button>
    </div>
  );
}
