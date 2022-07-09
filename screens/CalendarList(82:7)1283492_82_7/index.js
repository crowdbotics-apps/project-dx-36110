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
      <View style={styles.View_82_8}>
        <View style={styles.View_82_9} />
        <TouchableOpacity
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/2086e75d-5308-40d6-819c-7cb81e08a702"
          }}
          style={styles.TouchableOpacity_95_299}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("134_339"))
          }
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/c12269be-e9a4-4039-8c7b-07acfeb655cd"
          }}
          style={styles.ImageBackground_86_11}
        />
        <TouchableOpacity
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/4186c9e1-2cd9-42de-9e2a-97ce282d7911"
          }}
          style={styles.TouchableOpacity_82_143}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("48_2"))
          }
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/5da8f0d7-2555-4707-a194-76092bc47d13"
          }}
          style={styles.ImageBackground_82_12}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/33921f35-85c3-4292-846f-4a528828c3f5"
          }}
          style={styles.ImageBackground_82_13}
        />
        <View style={styles.View_82_14}>
          <Text style={styles.Text_82_14}>07-04-2022 (Today)</Text>
        </View>
        <TouchableOpacity
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/0d9328c6-da5e-49d4-b4dc-c1b98b8939f1"
          }}
          style={styles.TouchableOpacity_82_15}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("55_353"))
          }
        />
        <TouchableOpacity
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/7a1db3e9-6f28-4699-b8d6-7745a0654fe7"
          }}
          style={styles.TouchableOpacity_82_18}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("55_353"))
          }
        />
      </View>
      <View style={styles.View_82_30}>
        <View style={styles.View_82_31} />
        <View style={styles.View_82_32}>
          <Text style={styles.Text_82_32}>Jackson. K</Text>
        </View>
        <View style={styles.View_82_33}>
          <Text style={styles.Text_82_33}>29 | Male</Text>
        </View>
        <View style={styles.View_82_36}>
          <Text style={styles.Text_82_36}>17:45</Text>
        </View>
        <View style={styles.View_82_149}>
          <View style={styles.View_82_147}>
            <Text style={styles.Text_82_147}>ED | ED11</Text>
          </View>
          <View style={styles.View_82_148}>
            <Text style={styles.Text_82_148}>Room No</Text>
          </View>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/c3a4e2f7-3be7-4fba-8030-1bd00457212d"
          }}
          style={styles.ImageBackground_82_37}
        />
      </View>
      <View style={styles.View_82_274}>
        <View style={styles.View_82_275} />
        <View style={styles.View_82_276}>
          <Text style={styles.Text_82_276}>Jackson. K</Text>
        </View>
        <View style={styles.View_82_277}>
          <Text style={styles.Text_82_277}>29 | Male</Text>
        </View>
        <View style={styles.View_82_278}>
          <Text style={styles.Text_82_278}>17:45</Text>
        </View>
        <View style={styles.View_82_279}>
          <View style={styles.View_82_280}>
            <Text style={styles.Text_82_280}>ED | ED11</Text>
          </View>
          <View style={styles.View_82_281}>
            <Text style={styles.Text_82_281}>Room No</Text>
          </View>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/d4bf4908-c3f9-44b6-bdd0-002ea7f9dab4"
          }}
          style={styles.ImageBackground_82_282}
        />
      </View>
      <View style={styles.View_82_326}>
        <View style={styles.View_82_327} />
        <View style={styles.View_82_328}>
          <Text style={styles.Text_82_328}>Jackson. K</Text>
        </View>
        <View style={styles.View_82_329}>
          <Text style={styles.Text_82_329}>29 | Male</Text>
        </View>
        <View style={styles.View_82_330}>
          <Text style={styles.Text_82_330}>17:45</Text>
        </View>
        <View style={styles.View_82_331}>
          <View style={styles.View_82_332}>
            <Text style={styles.Text_82_332}>ED | ED11</Text>
          </View>
          <View style={styles.View_82_333}>
            <Text style={styles.Text_82_333}>Room No</Text>
          </View>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/003c3d87-950b-4473-bd04-cc723142331e"
          }}
          style={styles.ImageBackground_82_334}
        />
      </View>
      <View style={styles.View_82_222}>
        <View style={styles.View_82_223} />
        <View style={styles.View_82_224}>
          <Text style={styles.Text_82_224}>Jackson. K</Text>
        </View>
        <View style={styles.View_82_225}>
          <Text style={styles.Text_82_225}>29 | Male</Text>
        </View>
        <View style={styles.View_82_226}>
          <Text style={styles.Text_82_226}>17:45</Text>
        </View>
        <View style={styles.View_82_227}>
          <View style={styles.View_82_228}>
            <Text style={styles.Text_82_228}>ED | ED11</Text>
          </View>
          <View style={styles.View_82_229}>
            <Text style={styles.Text_82_229}>Room No</Text>
          </View>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/440158df-7991-40ed-9460-fc21a22ec32c"
          }}
          style={styles.ImageBackground_82_230}
        />
      </View>
      <View style={styles.View_82_284}>
        <View style={styles.View_82_285} />
        <View style={styles.View_82_286}>
          <Text style={styles.Text_82_286}>Jackson. K</Text>
        </View>
        <View style={styles.View_82_287}>
          <Text style={styles.Text_82_287}>29 | Male</Text>
        </View>
        <View style={styles.View_82_288}>
          <Text style={styles.Text_82_288}>17:45</Text>
        </View>
        <View style={styles.View_82_289}>
          <View style={styles.View_82_290}>
            <Text style={styles.Text_82_290}>ED | ED11</Text>
          </View>
          <View style={styles.View_82_291}>
            <Text style={styles.Text_82_291}>Room No</Text>
          </View>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/2eafd901-8aab-4d2e-b2b6-d55cf1d89bff"
          }}
          style={styles.ImageBackground_82_292}
        />
      </View>
      <View style={styles.View_82_336}>
        <View style={styles.View_82_337} />
        <View style={styles.View_82_338}>
          <Text style={styles.Text_82_338}>Jackson. K</Text>
        </View>
        <View style={styles.View_82_339}>
          <Text style={styles.Text_82_339}>29 | Male</Text>
        </View>
        <View style={styles.View_82_340}>
          <Text style={styles.Text_82_340}>17:45</Text>
        </View>
        <View style={styles.View_82_341}>
          <View style={styles.View_82_342}>
            <Text style={styles.Text_82_342}>ED | ED11</Text>
          </View>
          <View style={styles.View_82_343}>
            <Text style={styles.Text_82_343}>Room No</Text>
          </View>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/a7ec888b-72c5-45bd-a168-78210d2c6dec"
          }}
          style={styles.ImageBackground_82_344}
        />
      </View>
      <View style={styles.View_82_150}>
        <View style={styles.View_82_151} />
        <View style={styles.View_82_152}>
          <Text style={styles.Text_82_152}>Mickey. G</Text>
        </View>
        <View style={styles.View_82_153}>
          <Text style={styles.Text_82_153}>68 | Male</Text>
        </View>
        <View style={styles.View_82_154}>
          <Text style={styles.Text_82_154}>09:02</Text>
        </View>
        <View style={styles.View_82_155}>
          <View style={styles.View_82_156}>
            <Text style={styles.Text_82_156}>5th | 525-2</Text>
          </View>
          <View style={styles.View_82_157}>
            <Text style={styles.Text_82_157}>Room No</Text>
          </View>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/060d9700-0a57-42ae-b353-d1837e3eda5d"
          }}
          style={styles.ImageBackground_82_158}
        />
      </View>
      <View style={styles.View_82_294}>
        <View style={styles.View_82_295} />
        <View style={styles.View_82_296}>
          <Text style={styles.Text_82_296}>Mickey. G</Text>
        </View>
        <View style={styles.View_82_297}>
          <Text style={styles.Text_82_297}>68 | Male</Text>
        </View>
        <View style={styles.View_82_298}>
          <Text style={styles.Text_82_298}>09:02</Text>
        </View>
        <View style={styles.View_82_299}>
          <View style={styles.View_82_300}>
            <Text style={styles.Text_82_300}>5th | 525-2</Text>
          </View>
          <View style={styles.View_82_301}>
            <Text style={styles.Text_82_301}>Room No</Text>
          </View>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/4312ccd2-f0d1-4ef8-83c3-b55f1f0268f6"
          }}
          style={styles.ImageBackground_82_302}
        />
      </View>
      <View style={styles.View_82_346}>
        <View style={styles.View_82_347} />
        <View style={styles.View_82_348}>
          <Text style={styles.Text_82_348}>Mickey. G</Text>
        </View>
        <View style={styles.View_82_349}>
          <Text style={styles.Text_82_349}>68 | Male</Text>
        </View>
        <View style={styles.View_82_350}>
          <Text style={styles.Text_82_350}>09:02</Text>
        </View>
        <View style={styles.View_82_351}>
          <View style={styles.View_82_352}>
            <Text style={styles.Text_82_352}>5th | 525-2</Text>
          </View>
          <View style={styles.View_82_353}>
            <Text style={styles.Text_82_353}>Room No</Text>
          </View>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/48363849-3482-455f-bd2b-23ab2b4a6cd7"
          }}
          style={styles.ImageBackground_82_354}
        />
      </View>
      <View style={styles.View_82_232}>
        <View style={styles.View_82_233} />
        <View style={styles.View_82_234}>
          <Text style={styles.Text_82_234}>Mickey. G</Text>
        </View>
        <View style={styles.View_82_235}>
          <Text style={styles.Text_82_235}>68 | Male</Text>
        </View>
        <View style={styles.View_82_236}>
          <Text style={styles.Text_82_236}>09:02</Text>
        </View>
        <View style={styles.View_82_237}>
          <View style={styles.View_82_238}>
            <Text style={styles.Text_82_238}>5th | 525-2</Text>
          </View>
          <View style={styles.View_82_239}>
            <Text style={styles.Text_82_239}>Room No</Text>
          </View>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/d0908643-a995-4cb2-b065-91eaf74b353a"
          }}
          style={styles.ImageBackground_82_240}
        />
      </View>
      <View style={styles.View_82_304}>
        <View style={styles.View_82_305} />
        <View style={styles.View_82_306}>
          <Text style={styles.Text_82_306}>Mickey. G</Text>
        </View>
        <View style={styles.View_82_307}>
          <Text style={styles.Text_82_307}>68 | Male</Text>
        </View>
        <View style={styles.View_82_308}>
          <Text style={styles.Text_82_308}>09:02</Text>
        </View>
        <View style={styles.View_82_309}>
          <View style={styles.View_82_310}>
            <Text style={styles.Text_82_310}>5th | 525-2</Text>
          </View>
          <View style={styles.View_82_311}>
            <Text style={styles.Text_82_311}>Room No</Text>
          </View>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/a87a9717-9559-49b5-a4c4-30a8855d847d"
          }}
          style={styles.ImageBackground_82_312}
        />
      </View>
      <View style={styles.View_82_356}>
        <View style={styles.View_82_357} />
        <View style={styles.View_82_358}>
          <Text style={styles.Text_82_358}>Mickey. G</Text>
        </View>
        <View style={styles.View_82_359}>
          <Text style={styles.Text_82_359}>68 | Male</Text>
        </View>
        <View style={styles.View_82_360}>
          <Text style={styles.Text_82_360}>09:02</Text>
        </View>
        <View style={styles.View_82_361}>
          <View style={styles.View_82_362}>
            <Text style={styles.Text_82_362}>5th | 525-2</Text>
          </View>
          <View style={styles.View_82_363}>
            <Text style={styles.Text_82_363}>Room No</Text>
          </View>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/e989e455-b0b8-4ea6-b9df-f3bf8de91e74"
          }}
          style={styles.ImageBackground_82_364}
        />
      </View>
      <View style={styles.View_82_161} />
      <View style={styles.View_82_314} />
      <View style={styles.View_82_366} />
      <View style={styles.View_82_242} />
      <View style={styles.View_82_315} />
      <View style={styles.View_82_367} />
      <View style={styles.View_82_162}>
        <Text style={styles.Text_82_162}>Research Tips</Text>
      </View>
      <View style={styles.View_82_316}>
        <Text style={styles.Text_82_316}>Research Tips</Text>
      </View>
      <View style={styles.View_82_368}>
        <Text style={styles.Text_82_368}>Research Tips</Text>
      </View>
      <View style={styles.View_82_243}>
        <Text style={styles.Text_82_243}>Research Tips</Text>
      </View>
      <View style={styles.View_82_317}>
        <Text style={styles.Text_82_317}>Research Tips</Text>
      </View>
      <View style={styles.View_82_369}>
        <Text style={styles.Text_82_369}>Research Tips</Text>
      </View>
      <View style={styles.View_82_163}>
        <Text style={styles.Text_82_163}>
          After performing a series of red blood cell tests, i came to the...
        </Text>
      </View>
      <View style={styles.View_82_318}>
        <Text style={styles.Text_82_318}>
          After performing a series of red blood cell tests, i came to the...
        </Text>
      </View>
      <View style={styles.View_82_370}>
        <Text style={styles.Text_82_370}>
          After performing a series of red blood cell tests, i came to the...
        </Text>
      </View>
      <View style={styles.View_82_244}>
        <Text style={styles.Text_82_244}>
          After performing a series of red blood cell tests, i came to the...
        </Text>
      </View>
      <View style={styles.View_82_319}>
        <Text style={styles.Text_82_319}>
          After performing a series of red blood cell tests, i came to the...
        </Text>
      </View>
      <View style={styles.View_82_371}>
        <Text style={styles.Text_82_371}>
          After performing a series of red blood cell tests, i came to the...
        </Text>
      </View>
      <View style={styles.View_82_164}>
        <Text style={styles.Text_82_164}>16:00</Text>
      </View>
      <View style={styles.View_82_320}>
        <Text style={styles.Text_82_320}>16:00</Text>
      </View>
      <View style={styles.View_82_372}>
        <Text style={styles.Text_82_372}>16:00</Text>
      </View>
      <View style={styles.View_82_245}>
        <Text style={styles.Text_82_245}>16:00</Text>
      </View>
      <View style={styles.View_82_321}>
        <Text style={styles.Text_82_321}>16:00</Text>
      </View>
      <View style={styles.View_82_373}>
        <Text style={styles.Text_82_373}>16:00</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/a7edb040-778a-4261-a323-55f905d7d4d5"
        }}
        style={styles.ImageBackground_82_246}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/51022a6c-4590-46c8-8947-3421ad07cc1c"
        }}
        style={styles.ImageBackground_82_324}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/3bb94c94-413f-4673-b425-941df2640a0a"
        }}
        style={styles.ImageBackground_82_376}
      />
      <TouchableOpacity
        style={styles.TouchableOpacity_82_101}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("65_582"))
        }
      >
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/33cebd81-dbe0-4718-9b19-9c3554986aed"
          }}
          style={styles.ImageBackground_82_102}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/1d21efbb-d140-4f75-b450-5e1f5ace8967"
          }}
          style={styles.ImageBackground_82_103}
        />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.TouchableOpacity_82_104}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("82_384"))
        }
      >
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/ebcac532-ae7e-4de0-bdd2-276b5e121fd5"
          }}
          style={styles.ImageBackground_82_105}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/c5bfd371-0b76-49d7-8ee2-b543aa2817af"
          }}
          style={styles.ImageBackground_82_106}
        />
      </TouchableOpacity>
      <View style={styles.View_140_630}>
        <View style={styles.View_140_631} />
        <TouchableOpacity
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/540aef90-f5ad-491b-b887-abdfeed9f263"
          }}
          style={styles.TouchableOpacity_140_632}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("48_2"))
          }
        />
        <TouchableOpacity
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/8a56c4a7-c7e3-420b-b61b-52ee7449c5e7"
          }}
          style={styles.TouchableOpacity_140_634}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("112_562"))
          }
        />
        <TouchableOpacity
          style={styles.TouchableOpacity_140_636}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("55_94"))
          }
        >
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/bdaebd3a-40d6-49bf-a95c-b235600b1712"
            }}
            style={styles.ImageBackground_140_637}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/ee154114-a13c-4ade-aef2-edf9729469c8"
            }}
            style={styles.ImageBackground_140_639}
          />
        </TouchableOpacity>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(244, 247, 253, 1)" },
  View_2: { height: hp("155%") },
  View_82_8: {
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
  View_82_9: {
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
  TouchableOpacity_95_299: {
    width: wp("3%"),
    height: hp("4%"),
    top: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%")
  },
  ImageBackground_86_11: {
    width: wp("4%"),
    height: hp("4%"),
    top: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("83%")
  },
  TouchableOpacity_82_143: {
    width: wp("4%"),
    height: hp("4%"),
    top: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("91%")
  },
  ImageBackground_82_12: {
    width: wp("2%"),
    minWidth: wp("2%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("70%"),
    top: hp("9%")
  },
  ImageBackground_82_13: {
    width: wp("2%"),
    minWidth: wp("2%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28%"),
    top: hp("9%")
  },
  View_82_14: {
    width: wp("28%"),
    minWidth: wp("28%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("36%"),
    top: hp("8%"),
    justifyContent: "flex-start"
  },
  Text_82_14: {
    color: "rgba(112, 112, 112, 1)",
    fontSize: 16,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  TouchableOpacity_82_15: {
    width: wp("4%"),
    height: hp("4%"),
    top: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%")
  },
  TouchableOpacity_82_18: {
    width: wp("4%"),
    height: hp("4%"),
    top: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%")
  },
  View_82_30: {
    width: wp("95%"),
    minWidth: wp("95%"),
    height: hp("12%"),
    minHeight: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("20%")
  },
  View_82_31: {
    width: wp("95%"),
    minWidth: wp("95%"),
    height: hp("12%"),
    minHeight: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_82_32: {
    width: wp("16%"),
    minWidth: wp("16%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_82_32: {
    color: "rgba(112, 112, 112, 1)",
    fontSize: 18,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_82_33: {
    width: wp("9%"),
    minWidth: wp("9%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%"),
    top: hp("6%"),
    justifyContent: "flex-start"
  },
  Text_82_33: {
    color: "rgba(112, 112, 112, 1)",
    fontSize: 13,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_82_36: {
    width: wp("6%"),
    minWidth: wp("6%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("84%"),
    top: hp("4%"),
    justifyContent: "flex-start"
  },
  Text_82_36: {
    color: "rgba(112, 112, 112, 1)",
    fontSize: 14,
    fontWeight: "300",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_82_149: {
    width: wp("11%"),
    minWidth: wp("11%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("42%"),
    top: hp("2%")
  },
  View_82_147: {
    width: wp("11%"),
    minWidth: wp("11%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4%"),
    justifyContent: "flex-start"
  },
  Text_82_147: {
    color: "rgba(112, 112, 112, 1)",
    fontSize: 16,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_82_148: {
    width: wp("10%"),
    minWidth: wp("10%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_82_148: {
    color: "rgba(112, 112, 112, 1)",
    fontSize: 13,
    fontWeight: "300",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_82_37: {
    width: wp("4%"),
    minWidth: wp("4%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("3%")
  },
  View_82_274: {
    width: wp("95%"),
    minWidth: wp("95%"),
    height: hp("12%"),
    minHeight: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("61%")
  },
  View_82_275: {
    width: wp("95%"),
    minWidth: wp("95%"),
    height: hp("12%"),
    minHeight: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_82_276: {
    width: wp("16%"),
    minWidth: wp("16%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_82_276: {
    color: "rgba(112, 112, 112, 1)",
    fontSize: 18,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_82_277: {
    width: wp("9%"),
    minWidth: wp("9%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%"),
    top: hp("6%"),
    justifyContent: "flex-start"
  },
  Text_82_277: {
    color: "rgba(112, 112, 112, 1)",
    fontSize: 13,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_82_278: {
    width: wp("6%"),
    minWidth: wp("6%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("84%"),
    top: hp("4%"),
    justifyContent: "flex-start"
  },
  Text_82_278: {
    color: "rgba(112, 112, 112, 1)",
    fontSize: 14,
    fontWeight: "300",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_82_279: {
    width: wp("11%"),
    minWidth: wp("11%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("42%"),
    top: hp("2%")
  },
  View_82_280: {
    width: wp("11%"),
    minWidth: wp("11%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4%"),
    justifyContent: "flex-start"
  },
  Text_82_280: {
    color: "rgba(112, 112, 112, 1)",
    fontSize: 16,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_82_281: {
    width: wp("10%"),
    minWidth: wp("10%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_82_281: {
    color: "rgba(112, 112, 112, 1)",
    fontSize: 13,
    fontWeight: "300",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_82_282: {
    width: wp("4%"),
    minWidth: wp("4%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("3%")
  },
  View_82_326: {
    width: wp("95%"),
    minWidth: wp("95%"),
    height: hp("12%"),
    minHeight: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("102%")
  },
  View_82_327: {
    width: wp("95%"),
    minWidth: wp("95%"),
    height: hp("12%"),
    minHeight: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_82_328: {
    width: wp("16%"),
    minWidth: wp("16%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_82_328: {
    color: "rgba(112, 112, 112, 1)",
    fontSize: 18,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_82_329: {
    width: wp("9%"),
    minWidth: wp("9%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%"),
    top: hp("6%"),
    justifyContent: "flex-start"
  },
  Text_82_329: {
    color: "rgba(112, 112, 112, 1)",
    fontSize: 13,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_82_330: {
    width: wp("6%"),
    minWidth: wp("6%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("84%"),
    top: hp("4%"),
    justifyContent: "flex-start"
  },
  Text_82_330: {
    color: "rgba(112, 112, 112, 1)",
    fontSize: 14,
    fontWeight: "300",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_82_331: {
    width: wp("11%"),
    minWidth: wp("11%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("42%"),
    top: hp("2%")
  },
  View_82_332: {
    width: wp("11%"),
    minWidth: wp("11%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4%"),
    justifyContent: "flex-start"
  },
  Text_82_332: {
    color: "rgba(112, 112, 112, 1)",
    fontSize: 16,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_82_333: {
    width: wp("10%"),
    minWidth: wp("10%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_82_333: {
    color: "rgba(112, 112, 112, 1)",
    fontSize: 13,
    fontWeight: "300",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_82_334: {
    width: wp("4%"),
    minWidth: wp("4%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("3%")
  },
  View_82_222: {
    width: wp("95%"),
    minWidth: wp("95%"),
    height: hp("12%"),
    minHeight: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("20%")
  },
  View_82_223: {
    width: wp("95%"),
    minWidth: wp("95%"),
    height: hp("12%"),
    minHeight: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_82_224: {
    width: wp("16%"),
    minWidth: wp("16%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_82_224: {
    color: "rgba(112, 112, 112, 1)",
    fontSize: 18,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_82_225: {
    width: wp("9%"),
    minWidth: wp("9%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%"),
    top: hp("6%"),
    justifyContent: "flex-start"
  },
  Text_82_225: {
    color: "rgba(112, 112, 112, 1)",
    fontSize: 13,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_82_226: {
    width: wp("6%"),
    minWidth: wp("6%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("84%"),
    top: hp("4%"),
    justifyContent: "flex-start"
  },
  Text_82_226: {
    color: "rgba(112, 112, 112, 1)",
    fontSize: 14,
    fontWeight: "300",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_82_227: {
    width: wp("11%"),
    minWidth: wp("11%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("42%"),
    top: hp("2%")
  },
  View_82_228: {
    width: wp("11%"),
    minWidth: wp("11%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4%"),
    justifyContent: "flex-start"
  },
  Text_82_228: {
    color: "rgba(112, 112, 112, 1)",
    fontSize: 16,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_82_229: {
    width: wp("10%"),
    minWidth: wp("10%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_82_229: {
    color: "rgba(112, 112, 112, 1)",
    fontSize: 13,
    fontWeight: "300",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_82_230: {
    width: wp("4%"),
    minWidth: wp("4%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("3%")
  },
  View_82_284: {
    width: wp("95%"),
    minWidth: wp("95%"),
    height: hp("12%"),
    minHeight: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("61%")
  },
  View_82_285: {
    width: wp("95%"),
    minWidth: wp("95%"),
    height: hp("12%"),
    minHeight: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_82_286: {
    width: wp("16%"),
    minWidth: wp("16%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_82_286: {
    color: "rgba(112, 112, 112, 1)",
    fontSize: 18,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_82_287: {
    width: wp("9%"),
    minWidth: wp("9%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%"),
    top: hp("6%"),
    justifyContent: "flex-start"
  },
  Text_82_287: {
    color: "rgba(112, 112, 112, 1)",
    fontSize: 13,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_82_288: {
    width: wp("6%"),
    minWidth: wp("6%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("84%"),
    top: hp("4%"),
    justifyContent: "flex-start"
  },
  Text_82_288: {
    color: "rgba(112, 112, 112, 1)",
    fontSize: 14,
    fontWeight: "300",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_82_289: {
    width: wp("11%"),
    minWidth: wp("11%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("42%"),
    top: hp("2%")
  },
  View_82_290: {
    width: wp("11%"),
    minWidth: wp("11%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4%"),
    justifyContent: "flex-start"
  },
  Text_82_290: {
    color: "rgba(112, 112, 112, 1)",
    fontSize: 16,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_82_291: {
    width: wp("10%"),
    minWidth: wp("10%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_82_291: {
    color: "rgba(112, 112, 112, 1)",
    fontSize: 13,
    fontWeight: "300",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_82_292: {
    width: wp("4%"),
    minWidth: wp("4%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("3%")
  },
  View_82_336: {
    width: wp("95%"),
    minWidth: wp("95%"),
    height: hp("12%"),
    minHeight: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("102%")
  },
  View_82_337: {
    width: wp("95%"),
    minWidth: wp("95%"),
    height: hp("12%"),
    minHeight: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_82_338: {
    width: wp("16%"),
    minWidth: wp("16%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_82_338: {
    color: "rgba(112, 112, 112, 1)",
    fontSize: 18,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_82_339: {
    width: wp("9%"),
    minWidth: wp("9%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%"),
    top: hp("6%"),
    justifyContent: "flex-start"
  },
  Text_82_339: {
    color: "rgba(112, 112, 112, 1)",
    fontSize: 13,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_82_340: {
    width: wp("6%"),
    minWidth: wp("6%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("84%"),
    top: hp("4%"),
    justifyContent: "flex-start"
  },
  Text_82_340: {
    color: "rgba(112, 112, 112, 1)",
    fontSize: 14,
    fontWeight: "300",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_82_341: {
    width: wp("11%"),
    minWidth: wp("11%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("42%"),
    top: hp("2%")
  },
  View_82_342: {
    width: wp("11%"),
    minWidth: wp("11%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4%"),
    justifyContent: "flex-start"
  },
  Text_82_342: {
    color: "rgba(112, 112, 112, 1)",
    fontSize: 16,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_82_343: {
    width: wp("10%"),
    minWidth: wp("10%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_82_343: {
    color: "rgba(112, 112, 112, 1)",
    fontSize: 13,
    fontWeight: "300",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_82_344: {
    width: wp("4%"),
    minWidth: wp("4%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("3%")
  },
  View_82_150: {
    width: wp("95%"),
    minWidth: wp("95%"),
    height: hp("12%"),
    minHeight: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("34%")
  },
  View_82_151: {
    width: wp("95%"),
    minWidth: wp("95%"),
    height: hp("12%"),
    minHeight: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_82_152: {
    width: wp("14%"),
    minWidth: wp("14%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_82_152: {
    color: "rgba(112, 112, 112, 1)",
    fontSize: 18,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_82_153: {
    width: wp("10%"),
    minWidth: wp("10%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%"),
    top: hp("6%"),
    justifyContent: "flex-start"
  },
  Text_82_153: {
    color: "rgba(112, 112, 112, 1)",
    fontSize: 13,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_82_154: {
    width: wp("6%"),
    minWidth: wp("6%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("83%"),
    top: hp("4%"),
    justifyContent: "flex-start"
  },
  Text_82_154: {
    color: "rgba(112, 112, 112, 1)",
    fontSize: 14,
    fontWeight: "300",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_82_155: {
    width: wp("15%"),
    minWidth: wp("15%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("40%"),
    top: hp("2%")
  },
  View_82_156: {
    width: wp("15%"),
    minWidth: wp("15%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4%"),
    justifyContent: "flex-start"
  },
  Text_82_156: {
    color: "rgba(112, 112, 112, 1)",
    fontSize: 16,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_82_157: {
    width: wp("10%"),
    minWidth: wp("10%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_82_157: {
    color: "rgba(112, 112, 112, 1)",
    fontSize: 13,
    fontWeight: "300",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_82_158: {
    width: wp("4%"),
    minWidth: wp("4%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("3%")
  },
  View_82_294: {
    width: wp("95%"),
    minWidth: wp("95%"),
    height: hp("12%"),
    minHeight: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("75%")
  },
  View_82_295: {
    width: wp("95%"),
    minWidth: wp("95%"),
    height: hp("12%"),
    minHeight: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_82_296: {
    width: wp("14%"),
    minWidth: wp("14%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_82_296: {
    color: "rgba(112, 112, 112, 1)",
    fontSize: 18,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_82_297: {
    width: wp("10%"),
    minWidth: wp("10%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%"),
    top: hp("6%"),
    justifyContent: "flex-start"
  },
  Text_82_297: {
    color: "rgba(112, 112, 112, 1)",
    fontSize: 13,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_82_298: {
    width: wp("6%"),
    minWidth: wp("6%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("83%"),
    top: hp("4%"),
    justifyContent: "flex-start"
  },
  Text_82_298: {
    color: "rgba(112, 112, 112, 1)",
    fontSize: 14,
    fontWeight: "300",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_82_299: {
    width: wp("15%"),
    minWidth: wp("15%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("40%"),
    top: hp("2%")
  },
  View_82_300: {
    width: wp("15%"),
    minWidth: wp("15%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4%"),
    justifyContent: "flex-start"
  },
  Text_82_300: {
    color: "rgba(112, 112, 112, 1)",
    fontSize: 16,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_82_301: {
    width: wp("10%"),
    minWidth: wp("10%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_82_301: {
    color: "rgba(112, 112, 112, 1)",
    fontSize: 13,
    fontWeight: "300",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_82_302: {
    width: wp("4%"),
    minWidth: wp("4%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("3%")
  },
  View_82_346: {
    width: wp("95%"),
    minWidth: wp("95%"),
    height: hp("12%"),
    minHeight: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("116%")
  },
  View_82_347: {
    width: wp("95%"),
    minWidth: wp("95%"),
    height: hp("12%"),
    minHeight: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_82_348: {
    width: wp("14%"),
    minWidth: wp("14%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_82_348: {
    color: "rgba(112, 112, 112, 1)",
    fontSize: 18,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_82_349: {
    width: wp("10%"),
    minWidth: wp("10%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%"),
    top: hp("6%"),
    justifyContent: "flex-start"
  },
  Text_82_349: {
    color: "rgba(112, 112, 112, 1)",
    fontSize: 13,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_82_350: {
    width: wp("6%"),
    minWidth: wp("6%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("83%"),
    top: hp("4%"),
    justifyContent: "flex-start"
  },
  Text_82_350: {
    color: "rgba(112, 112, 112, 1)",
    fontSize: 14,
    fontWeight: "300",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_82_351: {
    width: wp("15%"),
    minWidth: wp("15%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("40%"),
    top: hp("2%")
  },
  View_82_352: {
    width: wp("15%"),
    minWidth: wp("15%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4%"),
    justifyContent: "flex-start"
  },
  Text_82_352: {
    color: "rgba(112, 112, 112, 1)",
    fontSize: 16,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_82_353: {
    width: wp("10%"),
    minWidth: wp("10%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_82_353: {
    color: "rgba(112, 112, 112, 1)",
    fontSize: 13,
    fontWeight: "300",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_82_354: {
    width: wp("4%"),
    minWidth: wp("4%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("3%")
  },
  View_82_232: {
    width: wp("95%"),
    minWidth: wp("95%"),
    height: hp("12%"),
    minHeight: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("34%")
  },
  View_82_233: {
    width: wp("95%"),
    minWidth: wp("95%"),
    height: hp("12%"),
    minHeight: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_82_234: {
    width: wp("14%"),
    minWidth: wp("14%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_82_234: {
    color: "rgba(112, 112, 112, 1)",
    fontSize: 18,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_82_235: {
    width: wp("10%"),
    minWidth: wp("10%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%"),
    top: hp("6%"),
    justifyContent: "flex-start"
  },
  Text_82_235: {
    color: "rgba(112, 112, 112, 1)",
    fontSize: 13,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_82_236: {
    width: wp("6%"),
    minWidth: wp("6%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("83%"),
    top: hp("4%"),
    justifyContent: "flex-start"
  },
  Text_82_236: {
    color: "rgba(112, 112, 112, 1)",
    fontSize: 14,
    fontWeight: "300",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_82_237: {
    width: wp("15%"),
    minWidth: wp("15%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("40%"),
    top: hp("2%")
  },
  View_82_238: {
    width: wp("15%"),
    minWidth: wp("15%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4%"),
    justifyContent: "flex-start"
  },
  Text_82_238: {
    color: "rgba(112, 112, 112, 1)",
    fontSize: 16,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_82_239: {
    width: wp("10%"),
    minWidth: wp("10%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_82_239: {
    color: "rgba(112, 112, 112, 1)",
    fontSize: 13,
    fontWeight: "300",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_82_240: {
    width: wp("4%"),
    minWidth: wp("4%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("3%")
  },
  View_82_304: {
    width: wp("95%"),
    minWidth: wp("95%"),
    height: hp("12%"),
    minHeight: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("75%")
  },
  View_82_305: {
    width: wp("95%"),
    minWidth: wp("95%"),
    height: hp("12%"),
    minHeight: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_82_306: {
    width: wp("14%"),
    minWidth: wp("14%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_82_306: {
    color: "rgba(112, 112, 112, 1)",
    fontSize: 18,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_82_307: {
    width: wp("10%"),
    minWidth: wp("10%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%"),
    top: hp("6%"),
    justifyContent: "flex-start"
  },
  Text_82_307: {
    color: "rgba(112, 112, 112, 1)",
    fontSize: 13,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_82_308: {
    width: wp("6%"),
    minWidth: wp("6%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("83%"),
    top: hp("4%"),
    justifyContent: "flex-start"
  },
  Text_82_308: {
    color: "rgba(112, 112, 112, 1)",
    fontSize: 14,
    fontWeight: "300",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_82_309: {
    width: wp("15%"),
    minWidth: wp("15%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("40%"),
    top: hp("2%")
  },
  View_82_310: {
    width: wp("15%"),
    minWidth: wp("15%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4%"),
    justifyContent: "flex-start"
  },
  Text_82_310: {
    color: "rgba(112, 112, 112, 1)",
    fontSize: 16,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_82_311: {
    width: wp("10%"),
    minWidth: wp("10%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_82_311: {
    color: "rgba(112, 112, 112, 1)",
    fontSize: 13,
    fontWeight: "300",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_82_312: {
    width: wp("4%"),
    minWidth: wp("4%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("3%")
  },
  View_82_356: {
    width: wp("95%"),
    minWidth: wp("95%"),
    height: hp("12%"),
    minHeight: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("116%")
  },
  View_82_357: {
    width: wp("95%"),
    minWidth: wp("95%"),
    height: hp("12%"),
    minHeight: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_82_358: {
    width: wp("14%"),
    minWidth: wp("14%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_82_358: {
    color: "rgba(112, 112, 112, 1)",
    fontSize: 18,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_82_359: {
    width: wp("10%"),
    minWidth: wp("10%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%"),
    top: hp("6%"),
    justifyContent: "flex-start"
  },
  Text_82_359: {
    color: "rgba(112, 112, 112, 1)",
    fontSize: 13,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_82_360: {
    width: wp("6%"),
    minWidth: wp("6%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("83%"),
    top: hp("4%"),
    justifyContent: "flex-start"
  },
  Text_82_360: {
    color: "rgba(112, 112, 112, 1)",
    fontSize: 14,
    fontWeight: "300",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_82_361: {
    width: wp("15%"),
    minWidth: wp("15%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("40%"),
    top: hp("2%")
  },
  View_82_362: {
    width: wp("15%"),
    minWidth: wp("15%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4%"),
    justifyContent: "flex-start"
  },
  Text_82_362: {
    color: "rgba(112, 112, 112, 1)",
    fontSize: 16,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_82_363: {
    width: wp("10%"),
    minWidth: wp("10%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_82_363: {
    color: "rgba(112, 112, 112, 1)",
    fontSize: 13,
    fontWeight: "300",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_82_364: {
    width: wp("4%"),
    minWidth: wp("4%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("3%")
  },
  View_82_161: {
    width: wp("95%"),
    minWidth: wp("95%"),
    height: hp("12%"),
    minHeight: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("48%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_82_314: {
    width: wp("95%"),
    minWidth: wp("95%"),
    height: hp("12%"),
    minHeight: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("89%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_82_366: {
    width: wp("95%"),
    minWidth: wp("95%"),
    height: hp("12%"),
    minHeight: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("130%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_82_242: {
    width: wp("95%"),
    minWidth: wp("95%"),
    height: hp("12%"),
    minHeight: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("48%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_82_315: {
    width: wp("95%"),
    minWidth: wp("95%"),
    height: hp("12%"),
    minHeight: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("89%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_82_367: {
    width: wp("95%"),
    minWidth: wp("95%"),
    height: hp("12%"),
    minHeight: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("130%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_82_162: {
    width: wp("21%"),
    minWidth: wp("21%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16%"),
    top: hp("50%"),
    justifyContent: "flex-start"
  },
  Text_82_162: {
    color: "rgba(112, 112, 112, 1)",
    fontSize: 18,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_82_316: {
    width: wp("21%"),
    minWidth: wp("21%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16%"),
    top: hp("91%"),
    justifyContent: "flex-start"
  },
  Text_82_316: {
    color: "rgba(112, 112, 112, 1)",
    fontSize: 18,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_82_368: {
    width: wp("21%"),
    minWidth: wp("21%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16%"),
    top: hp("132%"),
    justifyContent: "flex-start"
  },
  Text_82_368: {
    color: "rgba(112, 112, 112, 1)",
    fontSize: 18,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_82_243: {
    width: wp("21%"),
    minWidth: wp("21%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16%"),
    top: hp("50%"),
    justifyContent: "flex-start"
  },
  Text_82_243: {
    color: "rgba(112, 112, 112, 1)",
    fontSize: 18,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_82_317: {
    width: wp("21%"),
    minWidth: wp("21%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16%"),
    top: hp("91%"),
    justifyContent: "flex-start"
  },
  Text_82_317: {
    color: "rgba(112, 112, 112, 1)",
    fontSize: 18,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_82_369: {
    width: wp("21%"),
    minWidth: wp("21%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16%"),
    top: hp("132%"),
    justifyContent: "flex-start"
  },
  Text_82_369: {
    color: "rgba(112, 112, 112, 1)",
    fontSize: 18,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_82_163: {
    width: wp("66%"),
    minWidth: wp("66%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16%"),
    top: hp("54%"),
    justifyContent: "flex-start"
  },
  Text_82_163: {
    color: "rgba(112, 112, 112, 1)",
    fontSize: 13,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_82_318: {
    width: wp("66%"),
    minWidth: wp("66%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16%"),
    top: hp("95%"),
    justifyContent: "flex-start"
  },
  Text_82_318: {
    color: "rgba(112, 112, 112, 1)",
    fontSize: 13,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_82_370: {
    width: wp("66%"),
    minWidth: wp("66%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16%"),
    top: hp("136%"),
    justifyContent: "flex-start"
  },
  Text_82_370: {
    color: "rgba(112, 112, 112, 1)",
    fontSize: 13,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_82_244: {
    width: wp("66%"),
    minWidth: wp("66%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16%"),
    top: hp("54%"),
    justifyContent: "flex-start"
  },
  Text_82_244: {
    color: "rgba(112, 112, 112, 1)",
    fontSize: 13,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_82_319: {
    width: wp("66%"),
    minWidth: wp("66%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16%"),
    top: hp("95%"),
    justifyContent: "flex-start"
  },
  Text_82_319: {
    color: "rgba(112, 112, 112, 1)",
    fontSize: 13,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_82_371: {
    width: wp("66%"),
    minWidth: wp("66%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16%"),
    top: hp("136%"),
    justifyContent: "flex-start"
  },
  Text_82_371: {
    color: "rgba(112, 112, 112, 1)",
    fontSize: 13,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_82_164: {
    width: wp("6%"),
    minWidth: wp("6%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("86%"),
    top: hp("52%"),
    justifyContent: "flex-start"
  },
  Text_82_164: {
    color: "rgba(112, 112, 112, 1)",
    fontSize: 14,
    fontWeight: "300",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_82_320: {
    width: wp("6%"),
    minWidth: wp("6%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("86%"),
    top: hp("93%"),
    justifyContent: "flex-start"
  },
  Text_82_320: {
    color: "rgba(112, 112, 112, 1)",
    fontSize: 14,
    fontWeight: "300",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_82_372: {
    width: wp("6%"),
    minWidth: wp("6%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("86%"),
    top: hp("134%"),
    justifyContent: "flex-start"
  },
  Text_82_372: {
    color: "rgba(112, 112, 112, 1)",
    fontSize: 14,
    fontWeight: "300",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_82_245: {
    width: wp("6%"),
    minWidth: wp("6%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("86%"),
    top: hp("52%"),
    justifyContent: "flex-start"
  },
  Text_82_245: {
    color: "rgba(112, 112, 112, 1)",
    fontSize: 14,
    fontWeight: "300",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_82_321: {
    width: wp("6%"),
    minWidth: wp("6%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("86%"),
    top: hp("93%"),
    justifyContent: "flex-start"
  },
  Text_82_321: {
    color: "rgba(112, 112, 112, 1)",
    fontSize: 14,
    fontWeight: "300",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_82_373: {
    width: wp("6%"),
    minWidth: wp("6%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("86%"),
    top: hp("134%"),
    justifyContent: "flex-start"
  },
  Text_82_373: {
    color: "rgba(112, 112, 112, 1)",
    fontSize: 14,
    fontWeight: "300",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_82_246: {
    width: wp("5%"),
    height: hp("5%"),
    top: hp("51%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%")
  },
  ImageBackground_82_324: {
    width: wp("5%"),
    height: hp("5%"),
    top: hp("92%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%")
  },
  ImageBackground_82_376: {
    width: wp("5%"),
    height: hp("5%"),
    top: hp("133%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%")
  },
  TouchableOpacity_82_101: {
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
  ImageBackground_82_102: {
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
  ImageBackground_82_103: {
    width: wp("4%"),
    height: hp("4%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  TouchableOpacity_82_104: {
    width: wp("9%"),
    minWidth: wp("9%"),
    height: hp("10%"),
    minHeight: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("87%"),
    top: hp("111%")
  },
  ImageBackground_82_105: {
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
  ImageBackground_82_106: {
    width: wp("5%"),
    height: hp("4%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  View_140_630: {
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
  View_140_631: {
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
  TouchableOpacity_140_632: {
    width: wp("3%"),
    height: hp("4%"),
    top: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19%")
  },
  TouchableOpacity_140_634: {
    width: wp("4%"),
    height: hp("4%"),
    top: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("77%")
  },
  TouchableOpacity_140_636: {
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
  ImageBackground_140_637: {
    width: wp("4%"),
    height: hp("3%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_140_639: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
