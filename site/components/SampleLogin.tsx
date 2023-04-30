import {
  Calendar,
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  Button,
  Switch,
  Input,
  Drawer,
  DrawerTrigger,
  DrawerContent,
  Tag,
  Progress,
} from '@bitglaze/glaze-ui';
import { useState } from 'react';

const SampleLogin = () => {
  const [awesome, setAwesome] = useState<boolean>(false);
  return (
    <div className="flex flex-col justify-center w-3/4 align-center">
      <div className="max-[580px]:p-4 p-10 border rounded-md bg-background">
        <p className="text-2xl text-center">Sample View </p>
        <br />
        <div className="mb-4">
          <label>First Name</label>
          <Input placeholder="Rugved" />
        </div>
        <div className="mb-4">
          <label>Last Name</label>
          <Input placeholder="Somwanshi" />
        </div>
        <div className="flex-row w-full mb-4">
          <label>Awesomeness Level {awesome ? '😎' : '🤔'}</label>
          <Progress className="mb-2" value={awesome ? 100 : 10} />
          <Switch
            checked={awesome}
            onClick={() => {
              setAwesome(!awesome);
            }}
            label="Build amazing components?"
          />
        </div>
        <div className="min-[580px]:flex flex-row mb-4 min-[580px]:justify-center min-[580px]:align-center">
          <div className="flex align-center justify-center">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant={'outline'} className="max-[580px]:mb-2">
                  Select your birthdate
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <Calendar />
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
          <div className="flex align-center justify-center">
            <Drawer>
              <DrawerTrigger asChild>
                <Button className="min-[580px]:ml-3 " variant={'outline'}>
                  View more details
                </Button>
              </DrawerTrigger>
              <DrawerContent className="w-2/3 max-[580px]:w-full">
                Test
              </DrawerContent>
            </Drawer>
          </div>
        </div>
        <Button className="w-full mr-3">Create a account</Button>
      </div>
    </div>
  );
};

export default SampleLogin;
