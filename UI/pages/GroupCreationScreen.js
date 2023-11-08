import { Tabs } from "react-native-collapsible-tab-view";
import SearchBar from "../Molcules/searchBars/SearchBar";
import { useEffect, useState } from "react";
import SelectedUsers from "../Molcules/stores/SelectedUsers";
import SearchedUser from "../Molcules/cards/SearchedUser";

export default function GroupCreationScreen() {
  const [selectedUsers, setSelectedUsers] = useState([
    /* {
      name: '',
      image: '',
      album: {
        name: '',
        image: '',
      },
    }, */
  ]);
  const [searchingText, setSearchingText] = useState("");
  useEffect(() => {
    setSelectedUsers([
      {
        image: require("../../assets/imgs/yihyun1.jpg"),
        name: "yihyun1",
        isSelected: false,
      },
      {
        image: require("../../assets/imgs/yihyun2.jpg"),
        name: "yihyun2",
        isSelected: false,
      },
      {
        image: require("../../assets/imgs/yihyun3.jpg"),
        name: "yihyun3",
        isSelected: false,
      },
      {
        image: require("../../assets/imgs/yihyun4.jpg"),
        name: "yihyun4",
        isSelected: false,
      },
      {
        image: require("../../assets/imgs/yihyun5.jpg"),
        name: "yihyun5",
        isSelected: false,
      },
    ]);
  }, []);
  const Header = () => (
    <SelectedUsers setUsers={setSelectedUsers} users={selectedUsers} />
  );
  return (
    <Tabs.Container renderHeader={Header}>
      {/* A */}
      <Tabs.Tab name="A">
        <Tabs.ScrollView>
          <SearchBar setValue={setSearchingText} value={searchingText} />
          {selectedUsers.map(
            (user, index) =>
              !user.isSelected && (
                <SearchedUser
                  key={index}
                  user={user}
                  setUsers={setSelectedUsers}
                  index={index}
                />
              )
          )}
        </Tabs.ScrollView>
      </Tabs.Tab>
      {/* B */}
      <Tabs.Tab name="B">
        <Tabs.ScrollView>
          <SearchBar setValue={setSearchingText} value={searchingText} />
          {selectedUsers.map((user, index) => (
            <SearchedUser
              key={index}
              user={user}
              setUsers={setSelectedUsers}
              index={index}
            />
          ))}
        </Tabs.ScrollView>
      </Tabs.Tab>
      {/* C */}
      <Tabs.Tab name="C">
        <Tabs.ScrollView>
          <SearchBar setValue={setSearchingText} value={searchingText} />
          {selectedUsers.map((user, index) => (
            <SearchedUser
              key={index}
              user={user}
              setUsers={setSelectedUsers}
              index={index}
            />
          ))}
        </Tabs.ScrollView>
      </Tabs.Tab>
      {/* D */}
      <Tabs.Tab name="D">
        <Tabs.ScrollView>
          <SearchBar setValue={setSearchingText} value={searchingText} />
          {selectedUsers.map((user, index) => (
            <SearchedUser
              user={user}
              key={index}
              setUsers={setSelectedUsers}
              index={index}
            />
          ))}
        </Tabs.ScrollView>
      </Tabs.Tab>
    </Tabs.Container>
  );
}
