import { auth } from "@clerk/nextjs";
import DropzoneComp from "@/components/Dropzone";
import Header from "@/components/Header";
import { FileType } from "@/typings";
import { db } from "@/firebase";
import { collection, getDocs } from "firebase/firestore";
import TableWrapper from "@/components/TableWrapper";
async function Dashboard() {
  const { userId } = auth();
  const docResults = await getDocs(collection(db, "users", userId!, "files"));
  const skeletionFiles: FileType[] = docResults.docs.map((doc) => ({
    id: doc.id,
    filename: doc.data().filename || doc.id,
    timestamp: new Date(doc.data().timestamp?.seconds * 1000) || undefined,
    fullName: doc.data().fullName,
    downloadURL: doc.data().downloadURL,
    type: doc.data().type,
    size: doc.data().size,
  }));
  console.log(skeletionFiles);
  return (
    <div>
      <Header />
      <DropzoneComp />
      <section className="container space-y-5">
        <h2 className="font-bold">All Files</h2>
        <div>
          <TableWrapper skeletionFiles={skeletionFiles} />
        </div>
      </section>
    </div>
  );
}

export default Dashboard;
