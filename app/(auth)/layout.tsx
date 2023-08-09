import MetaLogo from "@/components/logo/MetaLogo";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className=" flex min-h-full flex-col items-center justify-center py-12 sm:px-6 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <MetaLogo />
          <h2 className="mt-6 bg-gradient-to-r from-blue-600 to-blue-300 bg-clip-text text-center text-3xl font-bold tracking-wider text-transparent">
            Meta Chat
          </h2>
        </div>
        {children}
      </div>
    </>
  );
}
