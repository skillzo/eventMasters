import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";
import NavItems from "./NavItems";
import MobileNav from "./MobileNav";

const Header = () => {
  return (
    <header className="w-full ">
      <div className="wrapper flex items-center justify-between">
        <Link href="/" className="flex items-center ">
          <Image
            src="/assets/images/logo.svg"
            alt="logo"
            width={0}
            height={0}
            sizes="100vw"
            className="w-[60px] h-[50px]"
          />
          <p className="font-poppins italic font-semibold">
            Event <span className="text-primary-500">Masters</span>{" "}
          </p>
        </Link>

        <SignedIn>
          <nav className="md:flex-between hidden w-full max-w-xs">
            <NavItems />
          </nav>
        </SignedIn>

        <div className="flex w-32 justify-end gap-3">
          <SignedIn>
            <UserButton afterSignOutUrl="/" />
            <MobileNav />
          </SignedIn>
          <SignedOut>
            <Button asChild className="rounded-full" size="lg">
              <Link href="/sign-in">Login</Link>
            </Button>
          </SignedOut>
        </div>
      </div>
    </header>
  );
};

export default Header;
