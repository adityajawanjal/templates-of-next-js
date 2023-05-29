import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <div className=" bg-green-100 px-5 border-2 flex justify-between items-center h-20 border-b border-gray-400">
      <div className=" flex items-center">
        <Image
          src={"/favicon.ico"}
          width={400}
          height={400}
          alt="LOGO"
          className=" w-10 h-10 rounded-full mr-5 "
        />
        <h3 className=" text-3xl italic text-violet-800">Social Bee</h3>
      </div>
      <div>
        {[
          ["Home", "/"],
          ["About", "/about"],
          ["Contact", "/contact"],
        ].map(([title, url]) => {
          return (
            <Link href={url} key={url} className=" mr-5 text-lg">
              {title}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Header;
