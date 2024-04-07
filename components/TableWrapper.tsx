import { FileType } from "@/typings"
import { Button } from "./ui/button"
function TableWrapper({ skeletonFiles } : { skeletonFiles: FileType[] }) {
  return (
    <div>
      <Button variant="outline">Sort By ...</Button>
      {/*}<DataTable columns={columns} data={initialFiles}/> */}
    </div>
  )
}

export default TableWrapper
