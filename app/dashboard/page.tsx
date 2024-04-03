import { UserButton } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs";
import DropzoneComp from "@/components/Dropzone";
import Header from "@/components/Header";
const Dashboard = () => {
  const { userId } = auth();
  return (
    <div>
      <Header/>
      <DropzoneComp/>
    </div>
  );
};

export default Dashboard;
