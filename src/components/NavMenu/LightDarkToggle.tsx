// TODO: set up light/dark mode
// "use client";
//
// import { useTheme } from "next-themes";
// import { LuMoon, LuSun } from "react-icons/lu";
//
// import { Button } from "@/components/ui/button";
//
// const LightDarkToggle = () => {
//     const { theme, setTheme } = useTheme();
//
//     return (
//         <Button variant="outline" size="icon" className="shadow border-foreground dark:bg-secondary"
//                 onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
//             <LuSun className="rotate-0 scale-100 transition-all h-[1.2rem] w-[1.2rem] dark:rotate-90 dark:scale-0" />
//             <LuMoon
//                 className="absolute rotate-90 scale-0 transition-all h-[1.2rem] w-[1.2rem] dark:rotate-0 dark:scale-100" />
//             <span className="sr-only">Toggle theme</span>
//         </Button>
//     );
// };
//
// export default LightDarkToggle;
