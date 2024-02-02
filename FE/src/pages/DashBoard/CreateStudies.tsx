import { useSelector } from "react-redux";
import { Button, Card, Label, TextInput } from "flowbite-react";
import { useState } from "react";

const CreateStudies = () => {
  const [title, setTitle] = useState<string>("")
  const [hours, setHours] = useState<string>("");
  const [minutes, setMinutes] = useState<string>("");
  const [duration, setDuration] = useState<string>("");

    const toggle = useSelector((state: any) => state.toggleDisplay)
  return (
    <div className="w-full h-full relative">
      <div
        className={`w-[400px] h-[99vh] bg-[white] shadow-md absolute flex justify-center items-center duration-300 transition-all ${
          toggle ? "right-0" : "-right-[30rem]"
        } `}
      >
        <div className="flex w-full h-screen justify-center items-center">
          <div className="w-[350px] bg-white shadow-md p-5 rounded-md">
            <form className="flex flex-col gap-4">
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="email1" value="Title this study" />
                </div>
                <TextInput
                  id="email1"
                  type="text"
                  placeholder="Title this study"
                  required
                  value={title}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    setTitle(e.target.value);
                  }}
                />
              </div>
              <div>
                <div className="mb-2 block">
                  <Label
                    htmlFor="email1"
                    value="How long do you want to Study for"
                  />
                </div>
                <TextInput
                  id="email1"
                  type="text"
                  placeholder="2 hours"
                  required
                  value={hours}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    setHours(e.target.value);
                  }}
                />
              </div>
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="password" value="Break Time in Minutes" />
                </div>
                <TextInput
                  id="email1"
                  type="text"
                  placeholder="break time in a minute"
                  required
                  value={minutes}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    setMinutes(e.target.value);
                  }}
                />
              </div>

              <div>
                <div className="mb-2 block">
                  <Label htmlFor="password1" value="Study Duration" />
                </div>
                  <TextInput
                  id="time"
                  type="text"
                  placeholder="Study duration in a minute"
                  required
                  value={duration}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    setDuration(e.target.value);
                  }}
                />
              </div>
              <div className="flex items-center gap-2"></div>
              <Button type="submit" className="bg-gray-400">Register</Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateStudies;
