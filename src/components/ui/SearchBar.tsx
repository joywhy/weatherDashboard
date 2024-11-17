import { InputHTMLAttributes } from 'react';
// import { Input } from './input';
import { Search } from 'lucide-react';
import { cn } from '@/lib/utils';
type InputProps = InputHTMLAttributes<HTMLInputElement>;

// interface SearchBarProps {
//   props: InputProps;
//   className?: string;
// }

function SearchBar({ className, ...props }: InputProps) {
  return (
    //ring-offset-background focus-within:ring-1 focus-within:ring-ring
    //focus-within:ring-offset-2
    //ring-offset-2 ring-2
    <div
      className={cn(
        'flex-1 h-12 flex items-center text-base  rounded-lg gap-2 pl-2 ',
        // ' focus-within:ring-2 focus-within:ring-red-400',
        // ' focus-within:border-2 focus-within:border-red-400',
        ' focus-within:outline-4 focus-within:outline   focus-within:outline-red-400',
        className
      )}
    >
      <Search />
      <input
        {...props}
        type="search"
        className="w-full p-2 text-lg placeholder:text-muted-foreground focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50"
      />
    </div>
  );
}

export { SearchBar };
