import React from "react"
import {
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Text,
  Button,
  Switch,
  TextInput,
  StyleSheet,
  ScrollView
} from "react-native"
import Icon from "react-native-vector-icons/FontAwesome"
import { CheckBox } from "react-native-elements"
import { connect } from "react-redux"
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen"
import { getNavigationScreen } from "@screens"
export class Blank extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}
  }
  render = () => (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      style={styles.ScrollView_1}
    >
      <View style={styles.View_2} />
      <View style={styles.View_186_605}>
        <View style={styles.View_186_606} />
        <View style={styles.View_186_607}>
          <Text style={styles.Text_186_607}>Tasks (Today)</Text>
        </View>
        <TouchableOpacity
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/c90eaafa-9db1-4bc2-8f0a-c7df0ea575e8"
          }}
          style={styles.TouchableOpacity_186_608}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("140_1097"))
          }
        />
        <TouchableOpacity
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/0228c0e7-2fc8-4c5d-845a-540e3cdfa6be"
          }}
          style={styles.TouchableOpacity_186_611}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("55_94"))
          }
        />
      </View>
      <View style={styles.View_186_773}>
        <View style={styles.View_186_613}>
          <View style={styles.View_186_614} />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/d11a6af0-34e1-4831-b0cb-d6b3cf4e40a5"
            }}
            style={styles.ImageBackground_186_618}
          />
          <View style={styles.View_186_624}>
            <Text style={styles.Text_186_624}>Title</Text>
          </View>
          <View style={styles.View_186_625}>
            <Text style={styles.Text_186_625}>Text</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/d5d03864-ef6f-4eac-bc84-2d1ddc09f25e"
            }}
            style={styles.ImageBackground_186_752}
          />
          <View style={styles.View_186_628}>
            <Text style={styles.Text_186_628}>ED | ED11</Text>
          </View>
          <View style={styles.View_186_759}>
            <View style={styles.View_186_760} />
            <View style={styles.View_186_761}>
              <Text style={styles.Text_186_761}>14:56</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_186_629}>
        <View style={styles.View_186_630} />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/b5de7772-d611-4586-b607-8b2e3076475e"
          }}
          style={styles.ImageBackground_186_631}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/332387e2-1129-476d-896b-09967ddb4b4e"
          }}
          style={styles.ImageBackground_186_634}
        />
        <View style={styles.View_186_640}>
          <Text style={styles.Text_186_640}>Jackson. K</Text>
        </View>
        <View style={styles.View_186_641}>
          <Text style={styles.Text_186_641}>
            Collect his blood samples back from the lab
          </Text>
        </View>
        <View style={styles.View_186_642}>
          <Text style={styles.Text_186_642}>17:45</Text>
        </View>
        <View style={styles.View_186_643}>
          <View style={styles.View_186_644}>
            <Text style={styles.Text_186_644}>ED | ED11</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_186_645}>
        <View style={styles.View_186_646} />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/41c1affe-2dfb-4056-9814-1e1fc214f992"
          }}
          style={styles.ImageBackground_186_647}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/a712a85b-1214-418c-8c5b-c6bf266b4c56"
          }}
          style={styles.ImageBackground_186_650}
        />
        <View style={styles.View_186_656}>
          <Text style={styles.Text_186_656}>Jackson. K</Text>
        </View>
        <View style={styles.View_186_657}>
          <Text style={styles.Text_186_657}>
            Collect his blood samples back from the lab
          </Text>
        </View>
        <View style={styles.View_186_658}>
          <Text style={styles.Text_186_658}>17:45</Text>
        </View>
        <View style={styles.View_186_659}>
          <View style={styles.View_186_660}>
            <Text style={styles.Text_186_660}>4th | 401-1</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_186_661}>
        <View style={styles.View_186_662} />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/71937c08-fcef-4dd9-a772-e3ed88a7912f"
          }}
          style={styles.ImageBackground_186_663}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/5e46c48c-5f0e-41a8-8cc4-838e97b802fd"
          }}
          style={styles.ImageBackground_186_666}
        />
        <View style={styles.View_186_672}>
          <Text style={styles.Text_186_672}>Jackson. K</Text>
        </View>
        <View style={styles.View_186_673}>
          <Text style={styles.Text_186_673}>
            Collect his blood samples back from the lab
          </Text>
        </View>
        <View style={styles.View_186_674}>
          <Text style={styles.Text_186_674}>17:45</Text>
        </View>
        <View style={styles.View_186_675}>
          <View style={styles.View_186_676}>
            <Text style={styles.Text_186_676}>5th | 525-2</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_186_677}>
        <View style={styles.View_186_678} />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/16b97538-4792-4279-a768-092f198425ca"
          }}
          style={styles.ImageBackground_186_682}
        />
        <View style={styles.View_186_688}>
          <Text style={styles.Text_186_688}>Jackson. K</Text>
        </View>
        <View style={styles.View_186_689}>
          <Text style={styles.Text_186_689}>
            Collect his blood samples back from the lab
          </Text>
        </View>
        <View style={styles.View_186_690}>
          <Text style={styles.Text_186_690}>17:45</Text>
        </View>
        <View style={styles.View_186_691}>
          <View style={styles.View_186_692}>
            <Text style={styles.Text_186_692}>ED | ED11</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_186_693}>
        <View style={styles.View_186_694} />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/6928b498-7533-4a30-a68d-cec89489ec65"
          }}
          style={styles.ImageBackground_186_695}
        />
        <View style={styles.View_186_701}>
          <Text style={styles.Text_186_701}>Jackson. K</Text>
        </View>
        <View style={styles.View_186_702}>
          <Text style={styles.Text_186_702}>
            Collect his blood samples back from the lab
          </Text>
        </View>
        <View style={styles.View_186_703}>
          <Text style={styles.Text_186_703}>17:45</Text>
        </View>
        <View style={styles.View_186_704}>
          <View style={styles.View_186_705}>
            <Text style={styles.Text_186_705}>ED | ED11</Text>
          </View>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/30b12b1d-80e8-455f-b513-af2e8d4ed2e2"
          }}
          style={styles.ImageBackground_186_706}
        />
      </View>
      <View style={styles.View_186_709}>
        <View style={styles.View_186_710} />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/6c74278e-de69-48c5-959b-1c623396a32f"
          }}
          style={styles.ImageBackground_186_711}
        />
        <View style={styles.View_186_717}>
          <Text style={styles.Text_186_717}>Jackson. K</Text>
        </View>
        <View style={styles.View_186_718}>
          <Text style={styles.Text_186_718}>
            Collect his blood samples back from the lab
          </Text>
        </View>
        <View style={styles.View_186_719}>
          <Text style={styles.Text_186_719}>17:45</Text>
        </View>
        <View style={styles.View_186_720}>
          <View style={styles.View_186_721}>
            <Text style={styles.Text_186_721}>ED | ED11</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_186_731}>
        <View style={styles.View_186_732} />
        <TouchableOpacity
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/cddb0268-e8ad-4929-9c74-818b137f4a69"
          }}
          style={styles.TouchableOpacity_186_733}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("48_2"))
          }
        />
        <TouchableOpacity
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/14b0f559-1614-4c9f-a582-54837198d262"
          }}
          style={styles.TouchableOpacity_186_735}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("112_562"))
          }
        />
        <TouchableOpacity
          style={styles.TouchableOpacity_186_737}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("140_867"))
          }
        >
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/ead64671-78b6-4894-b3e5-38b847833c8a"
            }}
            style={styles.ImageBackground_186_738}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/d5a11f98-624c-4f6f-9d2b-1fe5a06763f1"
            }}
            style={styles.ImageBackground_186_740}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.View_186_741}>
        <View style={styles.View_186_742} />
        <View style={styles.View_186_743}>
          <View style={styles.View_186_744} />
          <View style={styles.View_186_745}>
            <Text style={styles.Text_186_745}>All</Text>
          </View>
        </View>
        <View style={styles.View_186_746}>
          <View style={styles.View_186_748}>
            <Text style={styles.Text_186_748}>Completed</Text>
          </View>
        </View>
        <View style={styles.View_186_749}>
          <View style={styles.View_186_751}>
            <Text style={styles.Text_186_751}>Pending</Text>
          </View>
        </View>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/3982c76b-311e-487c-8fa0-02d27b54a175"
        }}
        style={styles.ImageBackground_186_754}
      />
      <TouchableOpacity
        style={styles.TouchableOpacity_186_763}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("140_932"))
        }
      >
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/165d001a-c2a5-4f83-8b57-b3204e3e5013"
          }}
          style={styles.ImageBackground_186_764}
        />
        <View style={styles.View_186_765}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/c30a1e33-7358-43f4-9496-cf86b3332819"
            }}
            style={styles.ImageBackground_186_766}
          />
        </View>
      </TouchableOpacity>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(244, 247, 253, 1)" },
  View_2: { height: hp("155%") },
  View_186_605: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("16%"),
    minHeight: hp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_186_606: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("16%"),
    minHeight: hp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_186_607: {
    width: wp("19%"),
    minWidth: wp("19%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("40%"),
    top: hp("8%"),
    justifyContent: "flex-start"
  },
  Text_186_607: {
    color: "rgba(112, 112, 112, 1)",
    fontSize: 16,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  TouchableOpacity_186_608: {
    width: wp("4%"),
    height: hp("4%"),
    top: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%")
  },
  TouchableOpacity_186_611: {
    width: wp("4%"),
    height: hp("4%"),
    top: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("91%")
  },
  View_186_773: {
    width: wp("95%"),
    minWidth: wp("95%"),
    height: hp("15%"),
    minHeight: hp("15%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("34%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_186_613: {
    width: wp("95%"),
    minWidth: wp("95%"),
    height: hp("15%"),
    minHeight: hp("15%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_186_614: {
    width: wp("95%"),
    minWidth: wp("95%"),
    height: hp("15%"),
    minHeight: hp("15%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  ImageBackground_186_618: {
    width: wp("5%"),
    height: hp("5%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  View_186_624: {
    width: wp("6%"),
    minWidth: wp("6%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    top: hp("3%"),
    justifyContent: "flex-start"
  },
  Text_186_624: {
    color: "rgba(112, 112, 112, 1)",
    fontSize: 18,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_186_625: {
    width: wp("5%"),
    minWidth: wp("5%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    top: hp("8%"),
    justifyContent: "flex-start"
  },
  Text_186_625: {
    color: "rgba(112, 112, 112, 1)",
    fontSize: 14,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_186_752: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16%"),
    top: hp("8%")
  },
  View_186_628: {
    width: wp("11%"),
    minWidth: wp("11%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("43%"),
    top: hp("3%"),
    justifyContent: "flex-start"
  },
  Text_186_628: {
    color: "rgba(112, 112, 112, 1)",
    fontSize: 16,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_186_759: {
    width: wp("8%"),
    minWidth: wp("8%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("83%"),
    top: hp("3%")
  },
  View_186_760: {
    width: wp("8%"),
    minWidth: wp("8%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(244, 247, 253, 1)"
  },
  View_186_761: {
    width: wp("5%"),
    minWidth: wp("5%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_186_761: {
    color: "rgba(112, 112, 112, 1)",
    fontSize: 13,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_186_629: {
    width: wp("95%"),
    minWidth: wp("95%"),
    height: hp("15%"),
    minHeight: hp("15%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("101%")
  },
  View_186_630: {
    width: wp("95%"),
    minWidth: wp("95%"),
    height: hp("15%"),
    minHeight: hp("15%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  ImageBackground_186_631: {
    width: wp("4%"),
    height: hp("4%"),
    top: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("86%")
  },
  ImageBackground_186_634: {
    width: wp("5%"),
    height: hp("5%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  View_186_640: {
    width: wp("16%"),
    minWidth: wp("16%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    top: hp("3%"),
    justifyContent: "flex-start"
  },
  Text_186_640: {
    color: "rgba(112, 112, 112, 1)",
    fontSize: 18,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_186_641: {
    width: wp("82%"),
    minWidth: wp("82%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    top: hp("8%"),
    justifyContent: "flex-start"
  },
  Text_186_641: {
    color: "rgba(112, 112, 112, 1)",
    fontSize: 14,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_186_642: {
    width: wp("6%"),
    minWidth: wp("6%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("84%"),
    top: hp("3%"),
    justifyContent: "flex-start"
  },
  Text_186_642: {
    color: "rgba(112, 112, 112, 1)",
    fontSize: 14,
    fontWeight: "300",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_186_643: {
    width: wp("11%"),
    minWidth: wp("11%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("43%"),
    top: hp("3%")
  },
  View_186_644: {
    width: wp("11%"),
    minWidth: wp("11%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_186_644: {
    color: "rgba(112, 112, 112, 1)",
    fontSize: 16,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_186_645: {
    width: wp("95%"),
    minWidth: wp("95%"),
    height: hp("15%"),
    minHeight: hp("15%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("67%")
  },
  View_186_646: {
    width: wp("95%"),
    minWidth: wp("95%"),
    height: hp("15%"),
    minHeight: hp("15%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  ImageBackground_186_647: {
    width: wp("4%"),
    height: hp("4%"),
    top: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("86%")
  },
  ImageBackground_186_650: {
    width: wp("5%"),
    height: hp("5%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  View_186_656: {
    width: wp("16%"),
    minWidth: wp("16%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    top: hp("3%"),
    justifyContent: "flex-start"
  },
  Text_186_656: {
    color: "rgba(112, 112, 112, 1)",
    fontSize: 18,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_186_657: {
    width: wp("82%"),
    minWidth: wp("82%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    top: hp("8%"),
    justifyContent: "flex-start"
  },
  Text_186_657: {
    color: "rgba(112, 112, 112, 1)",
    fontSize: 14,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_186_658: {
    width: wp("6%"),
    minWidth: wp("6%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("84%"),
    top: hp("3%"),
    justifyContent: "flex-start"
  },
  Text_186_658: {
    color: "rgba(112, 112, 112, 1)",
    fontSize: 14,
    fontWeight: "300",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_186_659: {
    width: wp("14%"),
    minWidth: wp("14%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("42%"),
    top: hp("3%")
  },
  View_186_660: {
    width: wp("14%"),
    minWidth: wp("14%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_186_660: {
    color: "rgba(112, 112, 112, 1)",
    fontSize: 16,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_186_661: {
    width: wp("95%"),
    minWidth: wp("95%"),
    height: hp("15%"),
    minHeight: hp("15%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("51%")
  },
  View_186_662: {
    width: wp("95%"),
    minWidth: wp("95%"),
    height: hp("15%"),
    minHeight: hp("15%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  ImageBackground_186_663: {
    width: wp("4%"),
    height: hp("4%"),
    top: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("86%")
  },
  ImageBackground_186_666: {
    width: wp("5%"),
    height: hp("5%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  View_186_672: {
    width: wp("16%"),
    minWidth: wp("16%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    top: hp("3%"),
    justifyContent: "flex-start"
  },
  Text_186_672: {
    color: "rgba(112, 112, 112, 1)",
    fontSize: 18,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_186_673: {
    width: wp("82%"),
    minWidth: wp("82%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    top: hp("8%"),
    justifyContent: "flex-start"
  },
  Text_186_673: {
    color: "rgba(112, 112, 112, 1)",
    fontSize: 14,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_186_674: {
    width: wp("6%"),
    minWidth: wp("6%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("84%"),
    top: hp("3%"),
    justifyContent: "flex-start"
  },
  Text_186_674: {
    color: "rgba(112, 112, 112, 1)",
    fontSize: 14,
    fontWeight: "300",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_186_675: {
    width: wp("15%"),
    minWidth: wp("15%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("41%"),
    top: hp("3%")
  },
  View_186_676: {
    width: wp("15%"),
    minWidth: wp("15%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_186_676: {
    color: "rgba(112, 112, 112, 1)",
    fontSize: 16,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_186_677: {
    width: wp("95%"),
    minWidth: wp("95%"),
    height: hp("15%"),
    minHeight: hp("15%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("117%")
  },
  View_186_678: {
    width: wp("95%"),
    minWidth: wp("95%"),
    height: hp("15%"),
    minHeight: hp("15%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  ImageBackground_186_682: {
    width: wp("5%"),
    height: hp("5%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  View_186_688: {
    width: wp("16%"),
    minWidth: wp("16%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    top: hp("3%"),
    justifyContent: "flex-start"
  },
  Text_186_688: {
    color: "rgba(112, 112, 112, 1)",
    fontSize: 18,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_186_689: {
    width: wp("82%"),
    minWidth: wp("82%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    top: hp("8%"),
    justifyContent: "flex-start"
  },
  Text_186_689: {
    color: "rgba(112, 112, 112, 1)",
    fontSize: 14,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_186_690: {
    width: wp("6%"),
    minWidth: wp("6%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("84%"),
    top: hp("3%"),
    justifyContent: "flex-start"
  },
  Text_186_690: {
    color: "rgba(112, 112, 112, 1)",
    fontSize: 14,
    fontWeight: "300",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_186_691: {
    width: wp("11%"),
    minWidth: wp("11%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("43%"),
    top: hp("3%")
  },
  View_186_692: {
    width: wp("11%"),
    minWidth: wp("11%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_186_692: {
    color: "rgba(112, 112, 112, 1)",
    fontSize: 16,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_186_693: {
    width: wp("95%"),
    minWidth: wp("95%"),
    height: hp("15%"),
    minHeight: hp("15%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("84%")
  },
  View_186_694: {
    width: wp("95%"),
    minWidth: wp("95%"),
    height: hp("15%"),
    minHeight: hp("15%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  ImageBackground_186_695: {
    width: wp("5%"),
    height: hp("5%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  View_186_701: {
    width: wp("16%"),
    minWidth: wp("16%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    top: hp("3%"),
    justifyContent: "flex-start"
  },
  Text_186_701: {
    color: "rgba(112, 112, 112, 1)",
    fontSize: 18,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_186_702: {
    width: wp("82%"),
    minWidth: wp("82%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    top: hp("8%"),
    justifyContent: "flex-start"
  },
  Text_186_702: {
    color: "rgba(112, 112, 112, 1)",
    fontSize: 14,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_186_703: {
    width: wp("6%"),
    minWidth: wp("6%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("84%"),
    top: hp("3%"),
    justifyContent: "flex-start"
  },
  Text_186_703: {
    color: "rgba(112, 112, 112, 1)",
    fontSize: 14,
    fontWeight: "300",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_186_704: {
    width: wp("11%"),
    minWidth: wp("11%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("43%"),
    top: hp("3%")
  },
  View_186_705: {
    width: wp("11%"),
    minWidth: wp("11%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_186_705: {
    color: "rgba(112, 112, 112, 1)",
    fontSize: 16,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_186_706: {
    width: wp("4%"),
    height: hp("4%"),
    top: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("86%")
  },
  View_186_709: {
    width: wp("95%"),
    minWidth: wp("95%"),
    height: hp("15%"),
    minHeight: hp("15%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("137%")
  },
  View_186_710: {
    width: wp("95%"),
    minWidth: wp("95%"),
    height: hp("15%"),
    minHeight: hp("15%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  ImageBackground_186_711: {
    width: wp("5%"),
    height: hp("5%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  View_186_717: {
    width: wp("16%"),
    minWidth: wp("16%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    top: hp("3%"),
    justifyContent: "flex-start"
  },
  Text_186_717: {
    color: "rgba(112, 112, 112, 1)",
    fontSize: 18,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_186_718: {
    width: wp("82%"),
    minWidth: wp("82%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    top: hp("8%"),
    justifyContent: "flex-start"
  },
  Text_186_718: {
    color: "rgba(112, 112, 112, 1)",
    fontSize: 14,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_186_719: {
    width: wp("6%"),
    minWidth: wp("6%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("84%"),
    top: hp("3%"),
    justifyContent: "flex-start"
  },
  Text_186_719: {
    color: "rgba(112, 112, 112, 1)",
    fontSize: 14,
    fontWeight: "300",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_186_720: {
    width: wp("11%"),
    minWidth: wp("11%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("43%"),
    top: hp("3%")
  },
  View_186_721: {
    width: wp("11%"),
    minWidth: wp("11%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_186_721: {
    color: "rgba(112, 112, 112, 1)",
    fontSize: 16,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_186_731: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("16%"),
    minHeight: hp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("138%")
  },
  View_186_732: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("16%"),
    minHeight: hp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  TouchableOpacity_186_733: {
    width: wp("3%"),
    height: hp("4%"),
    top: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19%")
  },
  TouchableOpacity_186_735: {
    width: wp("4%"),
    height: hp("4%"),
    top: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("77%")
  },
  TouchableOpacity_186_737: {
    width: wp("4%"),
    minWidth: wp("4%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("48%"),
    top: hp("5%")
  },
  ImageBackground_186_738: {
    width: wp("4%"),
    height: hp("3%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_186_740: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  View_186_741: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("14%"),
    minHeight: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("16%")
  },
  View_186_742: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("14%"),
    minHeight: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_186_743: {
    width: wp("33%"),
    minWidth: wp("33%"),
    height: hp("9%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("5%")
  },
  View_186_744: {
    width: wp("33%"),
    minWidth: wp("33%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("8%")
  },
  View_186_745: {
    width: wp("3%"),
    minWidth: wp("3%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_186_745: {
    color: "rgba(112, 112, 112, 1)",
    fontSize: 16,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_186_746: {
    width: wp("14%"),
    minWidth: wp("14%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("76%"),
    top: hp("5%")
  },
  View_186_748: {
    width: wp("14%"),
    minWidth: wp("14%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_186_748: {
    color: "rgba(112, 112, 112, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_186_749: {
    width: wp("10%"),
    minWidth: wp("10%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("45%"),
    top: hp("5%")
  },
  View_186_751: {
    width: wp("10%"),
    minWidth: wp("10%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_186_751: {
    color: "rgba(112, 112, 112, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_186_754: {
    width: wp("2%"),
    minWidth: wp("2%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("58%"),
    top: hp("38%")
  },
  TouchableOpacity_186_763: {
    width: wp("9%"),
    minWidth: wp("9%"),
    height: hp("10%"),
    minHeight: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("87%"),
    top: hp("123%")
  },
  ImageBackground_186_764: {
    width: wp("9%"),
    minWidth: wp("9%"),
    height: hp("10%"),
    minHeight: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_186_765: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("2%")
  },
  ImageBackground_186_766: {
    width: wp("5%"),
    height: hp("5%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
