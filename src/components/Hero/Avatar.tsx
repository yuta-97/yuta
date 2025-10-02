import Image from "next/image";

const ProfileAvatar = () => {
  return (
    <div className="mb-8">
      <div className="mx-auto mb-8 flex h-32 w-32 items-center justify-center overflow-hidden rounded-full bg-gradient-to-r from-blue-500 to-purple-600 text-4xl font-bold text-white shadow-lg transition-shadow duration-300 hover:shadow-xl">
        <Image
          src={"/porf.jpeg"}
          alt="Profile Avatar"
          width={128}
          height={128}
        />
      </div>
    </div>
  );
};
export default ProfileAvatar;
