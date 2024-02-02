import { Button, Card } from "flowbite-react";


const HistoryCard = () => {
  return (
    <div className="justify-center items-center flex">
      <Card className="max-w-sm">
        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          Noteworthy technology acquisitions 2021
        </h5>
        <p className="font-normal text-gray-700 dark:text-gray-400">
          createdAT: 
        </p>

        <Button className="bg-[grey]">Update</Button>
      </Card>
    </div>
  );
};

export default HistoryCard;
