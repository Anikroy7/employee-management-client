"use client";
import { Button } from "@heroui/button";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
} from "@heroui/modal";
import { ReactNode } from "react";

import { useDeleteEmployee } from "@/src/hooks/employee.hook";

export default function ConfirmationModal({
  modalTitle,
  employeeId,
}: {
  modalTitle: ReactNode;
  employeeId: string;
}) {
  const { mutate: deleteAction } = useDeleteEmployee();
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const handleDelteEmployee = () => {
    deleteAction({
      id: employeeId,
    });
  };

  return (
    <>
      <Button className="bg-transparent" onPress={onOpen}>
        {modalTitle}
      </Button>
      <Modal
        backdrop="opaque"
        classNames={{
          backdrop:
            "bg-gradient-to-t from-zinc-900 to-zinc-900/10 backdrop-opacity-20",
        }}
        isOpen={isOpen}
        onOpenChange={onOpenChange}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1" />
              <ModalBody>
                <p>This employee will be permanently deleted. Are you sure?</p>
              </ModalBody>
              <ModalFooter>
                <Button color="default" variant="light" onPress={onClose}>
                  Close
                </Button>
                <Button
                  color="danger"
                  onPress={() => {
                    onClose();
                    handleDelteEmployee();
                  }}
                >
                  Delete
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
