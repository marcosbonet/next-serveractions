import React from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Badge } from "./ui/badge";
import { Button, buttonVariants } from "./ui/button";
import { task } from "@prisma/client";
import clsx from "clsx";
import { TaskButtonDelete } from "./task-button-delete";
import Link from "next/link";

function TaskCard({ task }: { task: task }) {
  return (
    <Card key={task.id}>
      <CardHeader className="flex flex-row justify-between">
        <CardTitle>{task.name}</CardTitle>
        <Badge
          className={clsx({
            "bg-orange-500": task.priority === "high",
            "bg-yellow-500": task.priority === "medium",
            "bg-green-500": task.priority === "low",
            "bg-red-500": task.priority === "urgent",
          })}
        >
          {task.priority}
        </Badge>
      </CardHeader>
      <CardContent>
        <p>{task.description}</p>
        <span className="text-slate-600">
          {new Date(task.createdAt).toLocaleDateString()}
        </span>
      </CardContent>
      <CardFooter className="flex gap-x-2 justify-end">
        <TaskButtonDelete taskId={task.id}></TaskButtonDelete>
        <Link
          href={`/tasks/${task.id}/edit`}
          className={buttonVariants({ variant: "secondary" })}
        >
          Edit
        </Link>
      </CardFooter>
    </Card>
  );
}

export default TaskCard;
