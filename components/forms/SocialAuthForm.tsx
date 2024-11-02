import Image from "next/image";

import { Button } from "../ui/button";

function SocialAuthForm() {
  return (
    <div className="mt-10 flex flex-wrap gap-2.5">
      <Button
        className="background-dark400_light900 body-medium text-dark200_light800 
      min-h-12 flex-1 rounded px-4 py-3.5"
      >
        <Image
          src="/icons/github.svg"
          alt="github icon"
          width={20}
          height={20}
          className="invert-colors mr-2.5 object-contain"
        />
        <span>Login in with GitHub</span>
      </Button>
      <Button
        className="background-dark400_light900 body-medium text-dark200_light800 
      min-h-12 flex-1 rounded px-4 py-3.5"
      >
        <Image
          src="/icons/google.svg"
          alt="google icon"
          width={20}
          height={20}
          className="invert-colors mr-2.5 object-contain"
        />
        <span>Login in with Google</span>
      </Button>
    </div>
  );
}

export default SocialAuthForm;
