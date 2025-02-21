"use client"
import { useDeleteEmployee } from "@/src/hooks/employee.hook";
import { Button } from "@heroui/button";
import {
    Modal,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalFooter,
    useDisclosure
} from "@heroui/modal";
import { ReactNode } from "react";

export default function ConfirmationModal({ modalTitle, employeeId }: { modalTitle: ReactNode, employeeId: string }) {
    const { mutate: deleteAction, data, isPending } = useDeleteEmployee()
    const { isOpen, onOpen, onOpenChange } = useDisclosure();
    const handleDelteEmployee = () => {
        console.log("Delete Employee", employeeId);
        deleteAction({
            id:  employeeId
        })
    }
    console.log(data, isPending)

    return (
        <>
            <Button className="bg-transparent" onPress={onOpen}>{modalTitle}</Button>
            <Modal
                backdrop="opaque"
                isOpen={isOpen} onOpenChange={onOpenChange}
                classNames={{
                    backdrop: "bg-gradient-to-t from-zinc-900 to-zinc-900/10 backdrop-opacity-20",
                }}
            >
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalHeader className="flex flex-col gap-1"></ModalHeader>
                            <ModalBody>
                                <p>
                                    This employee will be permanently deleted. Are you sure?
                                </p>
                                
                            </ModalBody>
                            <ModalFooter>
                                <Button color="default" variant="light" onPress={onClose}>
                                    Close
                                </Button>
                                <Button color="danger" onPress={
                                    () => {
                                        console.log("Action clicked", employeeId);
                                        onClose();
                                        handleDelteEmployee();
                                    }
                                }>
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
