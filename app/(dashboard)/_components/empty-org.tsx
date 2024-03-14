import { cn } from "@/lib/utils";
import { Poppins } from "next/font/google";
import Image from "next/image";
import { CreateOrganization } from "@clerk/nextjs";

import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

const font = Poppins({
  subsets: ["latin"],
  weight: ["600"],
});

export const EmptyOrg = () => {
  return (
    <div className="h-full flex flex-col items-center justify-center">
      <Image src="/elements.svg" alt="Empty Svg" height={300} width={300} />
      <h2 className={cn("text-2xl font-semibold mt-3", font.className)}>
        Welcome to Board
      </h2>
      <p className="text-muted-foreground text-sm mt-2">
        Create an organization to get started
      </p>

      <div className="mt-5">
        <Dialog>
          <DialogTrigger asChild>
            <Button size="lg">Create Organization</Button>
          </DialogTrigger>
          <DialogContent className="p-0 bg-transparent border-none max-w-[480px]">
            <CreateOrganization />
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
};
