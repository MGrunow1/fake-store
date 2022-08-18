import { useEffect } from "react";

// clear out deleted items from array
export function useRemoveDeletedItems(itemList, deleteFromItemList) {
     useEffect(() => {
          itemList.forEach((element) => {
               if (element.isDeleted) {
                    deleteFromItemList(element.id);
               }
         });
     }, [itemList, deleteFromItemList]);
}
