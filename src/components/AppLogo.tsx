const AppLogo = ({ size }: { size: number }) => {
  console.log("size", size);
  return (
    <p
      className="rounded-full h-10 w-10 bg-blue-800 items-center justify-center flex text-white font-black
       hover:cursor-pointer"
    >
      FD
    </p>
  );
};

export default AppLogo;
