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
      <View style={styles.View_134_228}>
        <View style={styles.View_106_109}>
          <View style={styles.View_106_110} />
          <View style={styles.View_106_111}>
            <Text style={styles.Text_106_111}>Jackson. K</Text>
          </View>
          <View style={styles.View_106_112}>
            <Text style={styles.Text_106_112}>Age - 29</Text>
          </View>
          <View style={styles.View_106_113}>
            <Text style={styles.Text_106_113}>Sex - Male</Text>
          </View>
          <View style={styles.View_106_114}>
            <Text style={styles.Text_106_114}>ED | ED 1</Text>
          </View>
          <View style={styles.View_106_115}>
            <Text style={styles.Text_106_115}>17:45</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/29dfbe63-da67-40ba-bcb2-580b31ead838"
            }}
            style={styles.ImageBackground_106_116}
          />
        </View>
        <View style={styles.View_106_119}>
          <View style={styles.View_106_120} />
          <View style={styles.View_106_121}>
            <Text style={styles.Text_106_121}>Victor. J</Text>
          </View>
          <View style={styles.View_106_122}>
            <Text style={styles.Text_106_122}>Age - 29</Text>
          </View>
          <View style={styles.View_106_123}>
            <Text style={styles.Text_106_123}>Sex - Male</Text>
          </View>
          <View style={styles.View_106_124}>
            <Text style={styles.Text_106_124}>ED | ED 1</Text>
          </View>
          <View style={styles.View_106_125}>
            <Text style={styles.Text_106_125}>17:45</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/19e6c0f3-73c0-4ffc-a7ff-ff68334cc0d7"
            }}
            style={styles.ImageBackground_106_126}
          />
        </View>
        <View style={styles.View_106_128}>
          <View style={styles.View_106_129} />
          <View style={styles.View_106_130}>
            <Text style={styles.Text_106_130}>Mark. G</Text>
          </View>
          <View style={styles.View_106_131}>
            <Text style={styles.Text_106_131}>Age - 29</Text>
          </View>
          <View style={styles.View_106_132}>
            <Text style={styles.Text_106_132}>Sex - Male</Text>
          </View>
          <View style={styles.View_106_133}>
            <Text style={styles.Text_106_133}>ED | ED 1</Text>
          </View>
          <View style={styles.View_106_134}>
            <Text style={styles.Text_106_134}>17:45</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/f940da0a-d7b6-48c3-8b6d-73d250490d2d"
            }}
            style={styles.ImageBackground_106_135}
          />
        </View>
        <View style={styles.View_134_200}>
          <View style={styles.View_134_201} />
          <View style={styles.View_134_202}>
            <Text style={styles.Text_134_202}>Mark. G</Text>
          </View>
          <View style={styles.View_134_203}>
            <Text style={styles.Text_134_203}>Age - 29</Text>
          </View>
          <View style={styles.View_134_204}>
            <Text style={styles.Text_134_204}>Sex - Male</Text>
          </View>
          <View style={styles.View_134_205}>
            <Text style={styles.Text_134_205}>ED | ED 1</Text>
          </View>
          <View style={styles.View_134_206}>
            <Text style={styles.Text_134_206}>17:45</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/221be019-276a-4af8-ac19-edbad7602555"
            }}
            style={styles.ImageBackground_134_207}
          />
        </View>
        <View style={styles.View_134_209}>
          <View style={styles.View_134_210} />
          <View style={styles.View_134_211}>
            <Text style={styles.Text_134_211}>Mark. G</Text>
          </View>
          <View style={styles.View_134_212}>
            <Text style={styles.Text_134_212}>Age - 29</Text>
          </View>
          <View style={styles.View_134_213}>
            <Text style={styles.Text_134_213}>Sex - Male</Text>
          </View>
          <View style={styles.View_134_214}>
            <Text style={styles.Text_134_214}>ED | ED 1</Text>
          </View>
          <View style={styles.View_134_215}>
            <Text style={styles.Text_134_215}>17:45</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/bbbf2e2a-94d3-4865-a7fb-ef3a2b1622cb"
            }}
            style={styles.ImageBackground_134_216}
          />
        </View>
        <View style={styles.View_134_218}>
          <View style={styles.View_134_219} />
          <View style={styles.View_134_220}>
            <Text style={styles.Text_134_220}>Mark. G</Text>
          </View>
          <View style={styles.View_134_221}>
            <Text style={styles.Text_134_221}>Age - 29</Text>
          </View>
          <View style={styles.View_134_222}>
            <Text style={styles.Text_134_222}>Sex - Male</Text>
          </View>
          <View style={styles.View_134_223}>
            <Text style={styles.Text_134_223}>ED | ED 1</Text>
          </View>
          <View style={styles.View_134_224}>
            <Text style={styles.Text_134_224}>17:45</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/64986998-714f-40fc-b1dd-0156effafb86"
            }}
            style={styles.ImageBackground_134_225}
          />
        </View>
      </View>
      <View style={styles.View_134_229}>
        <View style={styles.View_134_230}>
          <View style={styles.View_134_231} />
          <View style={styles.View_134_232}>
            <Text style={styles.Text_134_232}>Jackson. K</Text>
          </View>
          <View style={styles.View_134_233}>
            <Text style={styles.Text_134_233}>Age - 29</Text>
          </View>
          <View style={styles.View_134_234}>
            <Text style={styles.Text_134_234}>Sex - Male</Text>
          </View>
          <View style={styles.View_134_235}>
            <Text style={styles.Text_134_235}>4th | 401-1</Text>
          </View>
          <View style={styles.View_134_236}>
            <Text style={styles.Text_134_236}>17:45</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/d5b8394d-1694-4ff1-ac65-2569deeac739"
            }}
            style={styles.ImageBackground_134_237}
          />
        </View>
        <View style={styles.View_134_239}>
          <View style={styles.View_134_240} />
          <View style={styles.View_134_241}>
            <Text style={styles.Text_134_241}>Victor. J</Text>
          </View>
          <View style={styles.View_134_242}>
            <Text style={styles.Text_134_242}>Age - 29</Text>
          </View>
          <View style={styles.View_134_243}>
            <Text style={styles.Text_134_243}>Sex - Male</Text>
          </View>
          <View style={styles.View_134_244}>
            <Text style={styles.Text_134_244}>4th | 402-1</Text>
          </View>
          <View style={styles.View_134_245}>
            <Text style={styles.Text_134_245}>17:45</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/018bcc2a-3fa6-424c-a553-4c8d9db4da66"
            }}
            style={styles.ImageBackground_134_246}
          />
        </View>
        <View style={styles.View_134_248}>
          <View style={styles.View_134_249} />
          <View style={styles.View_134_250}>
            <Text style={styles.Text_134_250}>Mark. G</Text>
          </View>
          <View style={styles.View_134_251}>
            <Text style={styles.Text_134_251}>Age - 29</Text>
          </View>
          <View style={styles.View_134_252}>
            <Text style={styles.Text_134_252}>Sex - Male</Text>
          </View>
          <View style={styles.View_134_253}>
            <Text style={styles.Text_134_253}>4th | 402-2</Text>
          </View>
          <View style={styles.View_134_254}>
            <Text style={styles.Text_134_254}>17:45</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/e67f8e11-a188-4746-b86d-acc5cabfc62f"
            }}
            style={styles.ImageBackground_134_255}
          />
        </View>
        <View style={styles.View_134_257}>
          <View style={styles.View_134_258} />
          <View style={styles.View_134_259}>
            <Text style={styles.Text_134_259}>Mark. G</Text>
          </View>
          <View style={styles.View_134_260}>
            <Text style={styles.Text_134_260}>Age - 29</Text>
          </View>
          <View style={styles.View_134_261}>
            <Text style={styles.Text_134_261}>Sex - Male</Text>
          </View>
          <View style={styles.View_134_262}>
            <Text style={styles.Text_134_262}>4th | 411-2</Text>
          </View>
          <View style={styles.View_134_263}>
            <Text style={styles.Text_134_263}>17:45</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/e6109e92-cce4-4413-94fd-6abc349691cc"
            }}
            style={styles.ImageBackground_134_264}
          />
        </View>
        <View style={styles.View_134_266}>
          <View style={styles.View_134_267} />
          <View style={styles.View_134_268}>
            <Text style={styles.Text_134_268}>Mark. G</Text>
          </View>
          <View style={styles.View_134_269}>
            <Text style={styles.Text_134_269}>Age - 29</Text>
          </View>
          <View style={styles.View_134_270}>
            <Text style={styles.Text_134_270}>Sex - Male</Text>
          </View>
          <View style={styles.View_134_271}>
            <Text style={styles.Text_134_271}>4th | 418-1</Text>
          </View>
          <View style={styles.View_134_272}>
            <Text style={styles.Text_134_272}>17:45</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/1213c60a-d8f1-42f8-b4cf-83ad82bb067c"
            }}
            style={styles.ImageBackground_134_273}
          />
        </View>
        <View style={styles.View_134_275}>
          <View style={styles.View_134_276} />
          <View style={styles.View_134_277}>
            <Text style={styles.Text_134_277}>Mark. G</Text>
          </View>
          <View style={styles.View_134_278}>
            <Text style={styles.Text_134_278}>Age - 29</Text>
          </View>
          <View style={styles.View_134_279}>
            <Text style={styles.Text_134_279}>Sex - Male</Text>
          </View>
          <View style={styles.View_134_280}>
            <Text style={styles.Text_134_280}>4th | 425-2</Text>
          </View>
          <View style={styles.View_134_281}>
            <Text style={styles.Text_134_281}>17:45</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/0539dc65-8553-4fd4-9ea4-68e3b7d1a142"
            }}
            style={styles.ImageBackground_134_282}
          />
        </View>
      </View>
      <View style={styles.View_134_284}>
        <View style={styles.View_134_285}>
          <View style={styles.View_134_286} />
          <View style={styles.View_134_287}>
            <Text style={styles.Text_134_287}>Jackson. K</Text>
          </View>
          <View style={styles.View_134_288}>
            <Text style={styles.Text_134_288}>Age - 29</Text>
          </View>
          <View style={styles.View_134_289}>
            <Text style={styles.Text_134_289}>Sex - Male</Text>
          </View>
          <View style={styles.View_134_290}>
            <Text style={styles.Text_134_290}>5th | 501-1</Text>
          </View>
          <View style={styles.View_134_291}>
            <Text style={styles.Text_134_291}>17:45</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/c8636d9f-cd2a-4fd0-9b29-9d81a2ee23d9"
            }}
            style={styles.ImageBackground_134_292}
          />
        </View>
        <View style={styles.View_134_294}>
          <View style={styles.View_134_295} />
          <View style={styles.View_134_296}>
            <Text style={styles.Text_134_296}>Victor. J</Text>
          </View>
          <View style={styles.View_134_297}>
            <Text style={styles.Text_134_297}>Age - 29</Text>
          </View>
          <View style={styles.View_134_298}>
            <Text style={styles.Text_134_298}>Sex - Male</Text>
          </View>
          <View style={styles.View_134_299}>
            <Text style={styles.Text_134_299}>5th | 502-1</Text>
          </View>
          <View style={styles.View_134_300}>
            <Text style={styles.Text_134_300}>17:45</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/ce960451-bc31-4b0d-943b-238ccb2df3d1"
            }}
            style={styles.ImageBackground_134_301}
          />
        </View>
        <View style={styles.View_134_303}>
          <View style={styles.View_134_304} />
          <View style={styles.View_134_305}>
            <Text style={styles.Text_134_305}>Mark. G</Text>
          </View>
          <View style={styles.View_134_306}>
            <Text style={styles.Text_134_306}>Age - 29</Text>
          </View>
          <View style={styles.View_134_307}>
            <Text style={styles.Text_134_307}>Sex - Male</Text>
          </View>
          <View style={styles.View_134_308}>
            <Text style={styles.Text_134_308}>5th | 502-2</Text>
          </View>
          <View style={styles.View_134_309}>
            <Text style={styles.Text_134_309}>17:45</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/d17c7e2d-0734-4f17-aed1-a0bb047f3013"
            }}
            style={styles.ImageBackground_134_310}
          />
        </View>
        <View style={styles.View_134_312}>
          <View style={styles.View_134_313} />
          <View style={styles.View_134_314}>
            <Text style={styles.Text_134_314}>Mark. G</Text>
          </View>
          <View style={styles.View_134_315}>
            <Text style={styles.Text_134_315}>Age - 29</Text>
          </View>
          <View style={styles.View_134_316}>
            <Text style={styles.Text_134_316}>Sex - Male</Text>
          </View>
          <View style={styles.View_134_317}>
            <Text style={styles.Text_134_317}>5th | 511-2</Text>
          </View>
          <View style={styles.View_134_318}>
            <Text style={styles.Text_134_318}>17:45</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/fbee17d5-1b0a-4911-bb4e-38de0fecd86d"
            }}
            style={styles.ImageBackground_134_319}
          />
        </View>
        <View style={styles.View_134_321}>
          <View style={styles.View_134_322} />
          <View style={styles.View_134_323}>
            <Text style={styles.Text_134_323}>Mark. G</Text>
          </View>
          <View style={styles.View_134_324}>
            <Text style={styles.Text_134_324}>Age - 29</Text>
          </View>
          <View style={styles.View_134_325}>
            <Text style={styles.Text_134_325}>Sex - Male</Text>
          </View>
          <View style={styles.View_134_326}>
            <Text style={styles.Text_134_326}>5th | 518-1</Text>
          </View>
          <View style={styles.View_134_327}>
            <Text style={styles.Text_134_327}>17:45</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/ceb15866-950c-40cc-912c-dd4c87f008c9"
            }}
            style={styles.ImageBackground_134_328}
          />
        </View>
        <View style={styles.View_134_330}>
          <View style={styles.View_134_331} />
          <View style={styles.View_134_332}>
            <Text style={styles.Text_134_332}>Mark. G</Text>
          </View>
          <View style={styles.View_134_333}>
            <Text style={styles.Text_134_333}>Age - 29</Text>
          </View>
          <View style={styles.View_134_334}>
            <Text style={styles.Text_134_334}>Sex - Male</Text>
          </View>
          <View style={styles.View_134_335}>
            <Text style={styles.Text_134_335}>5th | 525-2</Text>
          </View>
          <View style={styles.View_134_336}>
            <Text style={styles.Text_134_336}>17:45</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/f3eaba07-c97c-499b-9e64-32c9dfbbc7bb"
            }}
            style={styles.ImageBackground_134_337}
          />
        </View>
      </View>
      <TouchableOpacity
        style={styles.TouchableOpacity_95_125}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("82_384"))
        }
      >
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/e751d03b-e602-4659-b31a-b81e5fbb50a0"
          }}
          style={styles.ImageBackground_95_126}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/46fc957d-8bae-4900-89fb-83af81614103"
          }}
          style={styles.ImageBackground_95_127}
        />
      </TouchableOpacity>
      <View style={styles.View_140_710}>
        <View style={styles.View_140_711} />
        <TouchableOpacity
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/53c65273-02db-4642-8adc-5afaf7df6660"
          }}
          style={styles.TouchableOpacity_140_712}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("48_2"))
          }
        />
        <TouchableOpacity
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/5493217b-0a40-47f8-bcd9-d4cb819311a4"
          }}
          style={styles.TouchableOpacity_140_714}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("112_562"))
          }
        />
        <TouchableOpacity
          style={styles.TouchableOpacity_140_716}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("55_94"))
          }
        >
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/66336a62-908e-4d88-b6d3-c584bfb03f54"
            }}
            style={styles.ImageBackground_140_717}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/d4aa8783-c563-4a1f-ab45-640ed21e26ec"
            }}
            style={styles.ImageBackground_140_719}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.View_95_43}>
        <View style={styles.View_95_44} />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/871c1a65-9ae4-4271-8f1e-7cf777f4d79f"
          }}
          style={styles.ImageBackground_95_45}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/79185358-abee-4efb-80f2-3a17bad49d0a"
          }}
          style={styles.ImageBackground_95_47}
        />
        <TouchableOpacity
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/41668ed4-0702-4be2-8e09-a19288c14f36"
          }}
          style={styles.TouchableOpacity_95_49}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("134_339"))
          }
        />
        <View style={styles.View_95_53}>
          <Text style={styles.Text_95_53}>Floor</Text>
        </View>
        <TouchableOpacity
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/c362476b-27dd-4f54-b14b-21a90c1660cc"
          }}
          style={styles.TouchableOpacity_95_57}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("55_353"))
          }
        />
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(244, 247, 253, 1)" },
  View_2: { height: hp("155%") },
  View_134_228: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("34%"),
    minHeight: hp("34%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("20%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_106_109: {
    width: wp("30%"),
    minWidth: wp("30%"),
    height: hp("34%"),
    minHeight: hp("34%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("0%")
  },
  View_106_110: {
    width: wp("30%"),
    minWidth: wp("30%"),
    height: hp("34%"),
    minHeight: hp("34%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_106_111: {
    width: wp("16%"),
    minWidth: wp("16%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("10%"),
    justifyContent: "flex-start"
  },
  Text_106_111: {
    color: "rgba(112, 112, 112, 1)",
    fontSize: 18,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_106_112: {
    width: wp("10%"),
    minWidth: wp("10%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("15%"),
    justifyContent: "flex-start"
  },
  Text_106_112: {
    color: "rgba(112, 112, 112, 1)",
    fontSize: 14,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_106_113: {
    width: wp("12%"),
    minWidth: wp("12%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("20%"),
    justifyContent: "flex-start"
  },
  Text_106_113: {
    color: "rgba(112, 112, 112, 1)",
    fontSize: 14,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_106_114: {
    width: wp("11%"),
    minWidth: wp("11%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("27%"),
    justifyContent: "flex-start"
  },
  Text_106_114: {
    color: "rgba(112, 112, 112, 1)",
    fontSize: 16,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_106_115: {
    width: wp("6%"),
    minWidth: wp("6%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21%"),
    top: hp("3%"),
    justifyContent: "flex-start"
  },
  Text_106_115: {
    color: "rgba(112, 112, 112, 1)",
    fontSize: 14,
    fontWeight: "300",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_106_116: {
    width: wp("3%"),
    minWidth: wp("3%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("3%")
  },
  View_106_119: {
    width: wp("30%"),
    minWidth: wp("30%"),
    height: hp("34%"),
    minHeight: hp("34%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("35%"),
    top: hp("0%")
  },
  View_106_120: {
    width: wp("30%"),
    minWidth: wp("30%"),
    height: hp("34%"),
    minHeight: hp("34%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_106_121: {
    width: wp("12%"),
    minWidth: wp("12%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("10%"),
    justifyContent: "flex-start"
  },
  Text_106_121: {
    color: "rgba(112, 112, 112, 1)",
    fontSize: 18,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_106_122: {
    width: wp("10%"),
    minWidth: wp("10%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("15%"),
    justifyContent: "flex-start"
  },
  Text_106_122: {
    color: "rgba(112, 112, 112, 1)",
    fontSize: 14,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_106_123: {
    width: wp("12%"),
    minWidth: wp("12%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("20%"),
    justifyContent: "flex-start"
  },
  Text_106_123: {
    color: "rgba(112, 112, 112, 1)",
    fontSize: 14,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_106_124: {
    width: wp("11%"),
    minWidth: wp("11%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("27%"),
    justifyContent: "flex-start"
  },
  Text_106_124: {
    color: "rgba(112, 112, 112, 1)",
    fontSize: 16,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_106_125: {
    width: wp("6%"),
    minWidth: wp("6%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21%"),
    top: hp("3%"),
    justifyContent: "flex-start"
  },
  Text_106_125: {
    color: "rgba(112, 112, 112, 1)",
    fontSize: 14,
    fontWeight: "300",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_106_126: {
    width: wp("3%"),
    minWidth: wp("3%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("3%")
  },
  View_106_128: {
    width: wp("30%"),
    minWidth: wp("30%"),
    height: hp("34%"),
    minHeight: hp("34%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("68%"),
    top: hp("0%")
  },
  View_106_129: {
    width: wp("30%"),
    minWidth: wp("30%"),
    height: hp("34%"),
    minHeight: hp("34%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_106_130: {
    width: wp("11%"),
    minWidth: wp("11%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("10%"),
    justifyContent: "flex-start"
  },
  Text_106_130: {
    color: "rgba(112, 112, 112, 1)",
    fontSize: 18,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_106_131: {
    width: wp("10%"),
    minWidth: wp("10%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("15%"),
    justifyContent: "flex-start"
  },
  Text_106_131: {
    color: "rgba(112, 112, 112, 1)",
    fontSize: 14,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_106_132: {
    width: wp("12%"),
    minWidth: wp("12%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("20%"),
    justifyContent: "flex-start"
  },
  Text_106_132: {
    color: "rgba(112, 112, 112, 1)",
    fontSize: 14,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_106_133: {
    width: wp("11%"),
    minWidth: wp("11%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("27%"),
    justifyContent: "flex-start"
  },
  Text_106_133: {
    color: "rgba(112, 112, 112, 1)",
    fontSize: 16,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_106_134: {
    width: wp("6%"),
    minWidth: wp("6%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21%"),
    top: hp("3%"),
    justifyContent: "flex-start"
  },
  Text_106_134: {
    color: "rgba(112, 112, 112, 1)",
    fontSize: 14,
    fontWeight: "300",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_106_135: {
    width: wp("3%"),
    minWidth: wp("3%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("3%")
  },
  View_134_200: {
    width: wp("30%"),
    minWidth: wp("30%"),
    height: hp("34%"),
    minHeight: hp("34%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("100%"),
    top: hp("0%")
  },
  View_134_201: {
    width: wp("30%"),
    minWidth: wp("30%"),
    height: hp("34%"),
    minHeight: hp("34%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_134_202: {
    width: wp("11%"),
    minWidth: wp("11%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("10%"),
    justifyContent: "flex-start"
  },
  Text_134_202: {
    color: "rgba(112, 112, 112, 1)",
    fontSize: 18,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_134_203: {
    width: wp("10%"),
    minWidth: wp("10%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("15%"),
    justifyContent: "flex-start"
  },
  Text_134_203: {
    color: "rgba(112, 112, 112, 1)",
    fontSize: 14,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_134_204: {
    width: wp("12%"),
    minWidth: wp("12%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("20%"),
    justifyContent: "flex-start"
  },
  Text_134_204: {
    color: "rgba(112, 112, 112, 1)",
    fontSize: 14,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_134_205: {
    width: wp("11%"),
    minWidth: wp("11%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("27%"),
    justifyContent: "flex-start"
  },
  Text_134_205: {
    color: "rgba(112, 112, 112, 1)",
    fontSize: 16,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_134_206: {
    width: wp("6%"),
    minWidth: wp("6%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21%"),
    top: hp("3%"),
    justifyContent: "flex-start"
  },
  Text_134_206: {
    color: "rgba(112, 112, 112, 1)",
    fontSize: 14,
    fontWeight: "300",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_134_207: {
    width: wp("3%"),
    minWidth: wp("3%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("3%")
  },
  View_134_209: {
    width: wp("30%"),
    minWidth: wp("30%"),
    height: hp("34%"),
    minHeight: hp("34%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("133%"),
    top: hp("0%")
  },
  View_134_210: {
    width: wp("30%"),
    minWidth: wp("30%"),
    height: hp("34%"),
    minHeight: hp("34%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_134_211: {
    width: wp("11%"),
    minWidth: wp("11%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("10%"),
    justifyContent: "flex-start"
  },
  Text_134_211: {
    color: "rgba(112, 112, 112, 1)",
    fontSize: 18,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_134_212: {
    width: wp("10%"),
    minWidth: wp("10%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("15%"),
    justifyContent: "flex-start"
  },
  Text_134_212: {
    color: "rgba(112, 112, 112, 1)",
    fontSize: 14,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_134_213: {
    width: wp("12%"),
    minWidth: wp("12%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("20%"),
    justifyContent: "flex-start"
  },
  Text_134_213: {
    color: "rgba(112, 112, 112, 1)",
    fontSize: 14,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_134_214: {
    width: wp("11%"),
    minWidth: wp("11%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("27%"),
    justifyContent: "flex-start"
  },
  Text_134_214: {
    color: "rgba(112, 112, 112, 1)",
    fontSize: 16,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_134_215: {
    width: wp("6%"),
    minWidth: wp("6%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21%"),
    top: hp("3%"),
    justifyContent: "flex-start"
  },
  Text_134_215: {
    color: "rgba(112, 112, 112, 1)",
    fontSize: 14,
    fontWeight: "300",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_134_216: {
    width: wp("3%"),
    minWidth: wp("3%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("3%")
  },
  View_134_218: {
    width: wp("30%"),
    minWidth: wp("30%"),
    height: hp("34%"),
    minHeight: hp("34%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("165%"),
    top: hp("0%")
  },
  View_134_219: {
    width: wp("30%"),
    minWidth: wp("30%"),
    height: hp("34%"),
    minHeight: hp("34%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_134_220: {
    width: wp("11%"),
    minWidth: wp("11%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("10%"),
    justifyContent: "flex-start"
  },
  Text_134_220: {
    color: "rgba(112, 112, 112, 1)",
    fontSize: 18,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_134_221: {
    width: wp("10%"),
    minWidth: wp("10%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("15%"),
    justifyContent: "flex-start"
  },
  Text_134_221: {
    color: "rgba(112, 112, 112, 1)",
    fontSize: 14,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_134_222: {
    width: wp("12%"),
    minWidth: wp("12%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("20%"),
    justifyContent: "flex-start"
  },
  Text_134_222: {
    color: "rgba(112, 112, 112, 1)",
    fontSize: 14,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_134_223: {
    width: wp("11%"),
    minWidth: wp("11%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("27%"),
    justifyContent: "flex-start"
  },
  Text_134_223: {
    color: "rgba(112, 112, 112, 1)",
    fontSize: 16,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_134_224: {
    width: wp("6%"),
    minWidth: wp("6%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21%"),
    top: hp("3%"),
    justifyContent: "flex-start"
  },
  Text_134_224: {
    color: "rgba(112, 112, 112, 1)",
    fontSize: 14,
    fontWeight: "300",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_134_225: {
    width: wp("3%"),
    minWidth: wp("3%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("3%")
  },
  View_134_229: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("34%"),
    minHeight: hp("34%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("59%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_134_230: {
    width: wp("30%"),
    minWidth: wp("30%"),
    height: hp("34%"),
    minHeight: hp("34%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("0%")
  },
  View_134_231: {
    width: wp("30%"),
    minWidth: wp("30%"),
    height: hp("34%"),
    minHeight: hp("34%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_134_232: {
    width: wp("16%"),
    minWidth: wp("16%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("10%"),
    justifyContent: "flex-start"
  },
  Text_134_232: {
    color: "rgba(112, 112, 112, 1)",
    fontSize: 18,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_134_233: {
    width: wp("10%"),
    minWidth: wp("10%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("15%"),
    justifyContent: "flex-start"
  },
  Text_134_233: {
    color: "rgba(112, 112, 112, 1)",
    fontSize: 14,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_134_234: {
    width: wp("12%"),
    minWidth: wp("12%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("20%"),
    justifyContent: "flex-start"
  },
  Text_134_234: {
    color: "rgba(112, 112, 112, 1)",
    fontSize: 14,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_134_235: {
    width: wp("14%"),
    minWidth: wp("14%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("27%"),
    justifyContent: "flex-start"
  },
  Text_134_235: {
    color: "rgba(112, 112, 112, 1)",
    fontSize: 16,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_134_236: {
    width: wp("6%"),
    minWidth: wp("6%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21%"),
    top: hp("3%"),
    justifyContent: "flex-start"
  },
  Text_134_236: {
    color: "rgba(112, 112, 112, 1)",
    fontSize: 14,
    fontWeight: "300",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_134_237: {
    width: wp("3%"),
    minWidth: wp("3%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("3%")
  },
  View_134_239: {
    width: wp("30%"),
    minWidth: wp("30%"),
    height: hp("34%"),
    minHeight: hp("34%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("35%"),
    top: hp("0%")
  },
  View_134_240: {
    width: wp("30%"),
    minWidth: wp("30%"),
    height: hp("34%"),
    minHeight: hp("34%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_134_241: {
    width: wp("12%"),
    minWidth: wp("12%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("10%"),
    justifyContent: "flex-start"
  },
  Text_134_241: {
    color: "rgba(112, 112, 112, 1)",
    fontSize: 18,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_134_242: {
    width: wp("10%"),
    minWidth: wp("10%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("15%"),
    justifyContent: "flex-start"
  },
  Text_134_242: {
    color: "rgba(112, 112, 112, 1)",
    fontSize: 14,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_134_243: {
    width: wp("12%"),
    minWidth: wp("12%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("20%"),
    justifyContent: "flex-start"
  },
  Text_134_243: {
    color: "rgba(112, 112, 112, 1)",
    fontSize: 14,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_134_244: {
    width: wp("14%"),
    minWidth: wp("14%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("27%"),
    justifyContent: "flex-start"
  },
  Text_134_244: {
    color: "rgba(112, 112, 112, 1)",
    fontSize: 16,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_134_245: {
    width: wp("6%"),
    minWidth: wp("6%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21%"),
    top: hp("3%"),
    justifyContent: "flex-start"
  },
  Text_134_245: {
    color: "rgba(112, 112, 112, 1)",
    fontSize: 14,
    fontWeight: "300",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_134_246: {
    width: wp("3%"),
    minWidth: wp("3%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("3%")
  },
  View_134_248: {
    width: wp("30%"),
    minWidth: wp("30%"),
    height: hp("34%"),
    minHeight: hp("34%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("68%"),
    top: hp("0%")
  },
  View_134_249: {
    width: wp("30%"),
    minWidth: wp("30%"),
    height: hp("34%"),
    minHeight: hp("34%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_134_250: {
    width: wp("11%"),
    minWidth: wp("11%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("10%"),
    justifyContent: "flex-start"
  },
  Text_134_250: {
    color: "rgba(112, 112, 112, 1)",
    fontSize: 18,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_134_251: {
    width: wp("10%"),
    minWidth: wp("10%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("15%"),
    justifyContent: "flex-start"
  },
  Text_134_251: {
    color: "rgba(112, 112, 112, 1)",
    fontSize: 14,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_134_252: {
    width: wp("12%"),
    minWidth: wp("12%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("20%"),
    justifyContent: "flex-start"
  },
  Text_134_252: {
    color: "rgba(112, 112, 112, 1)",
    fontSize: 14,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_134_253: {
    width: wp("15%"),
    minWidth: wp("15%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("27%"),
    justifyContent: "flex-start"
  },
  Text_134_253: {
    color: "rgba(112, 112, 112, 1)",
    fontSize: 16,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_134_254: {
    width: wp("6%"),
    minWidth: wp("6%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21%"),
    top: hp("3%"),
    justifyContent: "flex-start"
  },
  Text_134_254: {
    color: "rgba(112, 112, 112, 1)",
    fontSize: 14,
    fontWeight: "300",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_134_255: {
    width: wp("3%"),
    minWidth: wp("3%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("3%")
  },
  View_134_257: {
    width: wp("30%"),
    minWidth: wp("30%"),
    height: hp("34%"),
    minHeight: hp("34%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("100%"),
    top: hp("0%")
  },
  View_134_258: {
    width: wp("30%"),
    minWidth: wp("30%"),
    height: hp("34%"),
    minHeight: hp("34%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_134_259: {
    width: wp("11%"),
    minWidth: wp("11%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("10%"),
    justifyContent: "flex-start"
  },
  Text_134_259: {
    color: "rgba(112, 112, 112, 1)",
    fontSize: 18,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_134_260: {
    width: wp("10%"),
    minWidth: wp("10%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("15%"),
    justifyContent: "flex-start"
  },
  Text_134_260: {
    color: "rgba(112, 112, 112, 1)",
    fontSize: 14,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_134_261: {
    width: wp("12%"),
    minWidth: wp("12%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("20%"),
    justifyContent: "flex-start"
  },
  Text_134_261: {
    color: "rgba(112, 112, 112, 1)",
    fontSize: 14,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_134_262: {
    width: wp("14%"),
    minWidth: wp("14%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("27%"),
    justifyContent: "flex-start"
  },
  Text_134_262: {
    color: "rgba(112, 112, 112, 1)",
    fontSize: 16,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_134_263: {
    width: wp("6%"),
    minWidth: wp("6%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21%"),
    top: hp("3%"),
    justifyContent: "flex-start"
  },
  Text_134_263: {
    color: "rgba(112, 112, 112, 1)",
    fontSize: 14,
    fontWeight: "300",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_134_264: {
    width: wp("3%"),
    minWidth: wp("3%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("3%")
  },
  View_134_266: {
    width: wp("30%"),
    minWidth: wp("30%"),
    height: hp("34%"),
    minHeight: hp("34%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("133%"),
    top: hp("0%")
  },
  View_134_267: {
    width: wp("30%"),
    minWidth: wp("30%"),
    height: hp("34%"),
    minHeight: hp("34%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_134_268: {
    width: wp("11%"),
    minWidth: wp("11%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("10%"),
    justifyContent: "flex-start"
  },
  Text_134_268: {
    color: "rgba(112, 112, 112, 1)",
    fontSize: 18,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_134_269: {
    width: wp("10%"),
    minWidth: wp("10%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("15%"),
    justifyContent: "flex-start"
  },
  Text_134_269: {
    color: "rgba(112, 112, 112, 1)",
    fontSize: 14,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_134_270: {
    width: wp("12%"),
    minWidth: wp("12%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("20%"),
    justifyContent: "flex-start"
  },
  Text_134_270: {
    color: "rgba(112, 112, 112, 1)",
    fontSize: 14,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_134_271: {
    width: wp("14%"),
    minWidth: wp("14%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("27%"),
    justifyContent: "flex-start"
  },
  Text_134_271: {
    color: "rgba(112, 112, 112, 1)",
    fontSize: 16,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_134_272: {
    width: wp("6%"),
    minWidth: wp("6%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21%"),
    top: hp("3%"),
    justifyContent: "flex-start"
  },
  Text_134_272: {
    color: "rgba(112, 112, 112, 1)",
    fontSize: 14,
    fontWeight: "300",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_134_273: {
    width: wp("3%"),
    minWidth: wp("3%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("3%")
  },
  View_134_275: {
    width: wp("30%"),
    minWidth: wp("30%"),
    height: hp("34%"),
    minHeight: hp("34%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("165%"),
    top: hp("0%")
  },
  View_134_276: {
    width: wp("30%"),
    minWidth: wp("30%"),
    height: hp("34%"),
    minHeight: hp("34%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_134_277: {
    width: wp("11%"),
    minWidth: wp("11%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("10%"),
    justifyContent: "flex-start"
  },
  Text_134_277: {
    color: "rgba(112, 112, 112, 1)",
    fontSize: 18,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_134_278: {
    width: wp("10%"),
    minWidth: wp("10%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("15%"),
    justifyContent: "flex-start"
  },
  Text_134_278: {
    color: "rgba(112, 112, 112, 1)",
    fontSize: 14,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_134_279: {
    width: wp("12%"),
    minWidth: wp("12%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("20%"),
    justifyContent: "flex-start"
  },
  Text_134_279: {
    color: "rgba(112, 112, 112, 1)",
    fontSize: 14,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_134_280: {
    width: wp("15%"),
    minWidth: wp("15%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("27%"),
    justifyContent: "flex-start"
  },
  Text_134_280: {
    color: "rgba(112, 112, 112, 1)",
    fontSize: 16,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_134_281: {
    width: wp("6%"),
    minWidth: wp("6%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21%"),
    top: hp("3%"),
    justifyContent: "flex-start"
  },
  Text_134_281: {
    color: "rgba(112, 112, 112, 1)",
    fontSize: 14,
    fontWeight: "300",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_134_282: {
    width: wp("3%"),
    minWidth: wp("3%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("3%")
  },
  View_134_284: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("34%"),
    minHeight: hp("34%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("97%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_134_285: {
    width: wp("30%"),
    minWidth: wp("30%"),
    height: hp("34%"),
    minHeight: hp("34%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("0%")
  },
  View_134_286: {
    width: wp("30%"),
    minWidth: wp("30%"),
    height: hp("34%"),
    minHeight: hp("34%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_134_287: {
    width: wp("16%"),
    minWidth: wp("16%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("10%"),
    justifyContent: "flex-start"
  },
  Text_134_287: {
    color: "rgba(112, 112, 112, 1)",
    fontSize: 18,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_134_288: {
    width: wp("10%"),
    minWidth: wp("10%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("15%"),
    justifyContent: "flex-start"
  },
  Text_134_288: {
    color: "rgba(112, 112, 112, 1)",
    fontSize: 14,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_134_289: {
    width: wp("12%"),
    minWidth: wp("12%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("20%"),
    justifyContent: "flex-start"
  },
  Text_134_289: {
    color: "rgba(112, 112, 112, 1)",
    fontSize: 14,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_134_290: {
    width: wp("14%"),
    minWidth: wp("14%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("27%"),
    justifyContent: "flex-start"
  },
  Text_134_290: {
    color: "rgba(112, 112, 112, 1)",
    fontSize: 16,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_134_291: {
    width: wp("6%"),
    minWidth: wp("6%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21%"),
    top: hp("3%"),
    justifyContent: "flex-start"
  },
  Text_134_291: {
    color: "rgba(112, 112, 112, 1)",
    fontSize: 14,
    fontWeight: "300",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_134_292: {
    width: wp("3%"),
    minWidth: wp("3%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("3%")
  },
  View_134_294: {
    width: wp("30%"),
    minWidth: wp("30%"),
    height: hp("34%"),
    minHeight: hp("34%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("35%"),
    top: hp("0%")
  },
  View_134_295: {
    width: wp("30%"),
    minWidth: wp("30%"),
    height: hp("34%"),
    minHeight: hp("34%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_134_296: {
    width: wp("12%"),
    minWidth: wp("12%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("10%"),
    justifyContent: "flex-start"
  },
  Text_134_296: {
    color: "rgba(112, 112, 112, 1)",
    fontSize: 18,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_134_297: {
    width: wp("10%"),
    minWidth: wp("10%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("15%"),
    justifyContent: "flex-start"
  },
  Text_134_297: {
    color: "rgba(112, 112, 112, 1)",
    fontSize: 14,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_134_298: {
    width: wp("12%"),
    minWidth: wp("12%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("20%"),
    justifyContent: "flex-start"
  },
  Text_134_298: {
    color: "rgba(112, 112, 112, 1)",
    fontSize: 14,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_134_299: {
    width: wp("14%"),
    minWidth: wp("14%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("27%"),
    justifyContent: "flex-start"
  },
  Text_134_299: {
    color: "rgba(112, 112, 112, 1)",
    fontSize: 16,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_134_300: {
    width: wp("6%"),
    minWidth: wp("6%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21%"),
    top: hp("3%"),
    justifyContent: "flex-start"
  },
  Text_134_300: {
    color: "rgba(112, 112, 112, 1)",
    fontSize: 14,
    fontWeight: "300",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_134_301: {
    width: wp("3%"),
    minWidth: wp("3%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("3%")
  },
  View_134_303: {
    width: wp("30%"),
    minWidth: wp("30%"),
    height: hp("34%"),
    minHeight: hp("34%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("68%"),
    top: hp("0%")
  },
  View_134_304: {
    width: wp("30%"),
    minWidth: wp("30%"),
    height: hp("34%"),
    minHeight: hp("34%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_134_305: {
    width: wp("11%"),
    minWidth: wp("11%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("10%"),
    justifyContent: "flex-start"
  },
  Text_134_305: {
    color: "rgba(112, 112, 112, 1)",
    fontSize: 18,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_134_306: {
    width: wp("10%"),
    minWidth: wp("10%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("15%"),
    justifyContent: "flex-start"
  },
  Text_134_306: {
    color: "rgba(112, 112, 112, 1)",
    fontSize: 14,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_134_307: {
    width: wp("12%"),
    minWidth: wp("12%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("20%"),
    justifyContent: "flex-start"
  },
  Text_134_307: {
    color: "rgba(112, 112, 112, 1)",
    fontSize: 14,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_134_308: {
    width: wp("15%"),
    minWidth: wp("15%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("27%"),
    justifyContent: "flex-start"
  },
  Text_134_308: {
    color: "rgba(112, 112, 112, 1)",
    fontSize: 16,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_134_309: {
    width: wp("6%"),
    minWidth: wp("6%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21%"),
    top: hp("3%"),
    justifyContent: "flex-start"
  },
  Text_134_309: {
    color: "rgba(112, 112, 112, 1)",
    fontSize: 14,
    fontWeight: "300",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_134_310: {
    width: wp("3%"),
    minWidth: wp("3%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("3%")
  },
  View_134_312: {
    width: wp("30%"),
    minWidth: wp("30%"),
    height: hp("34%"),
    minHeight: hp("34%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("100%"),
    top: hp("0%")
  },
  View_134_313: {
    width: wp("30%"),
    minWidth: wp("30%"),
    height: hp("34%"),
    minHeight: hp("34%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_134_314: {
    width: wp("11%"),
    minWidth: wp("11%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("10%"),
    justifyContent: "flex-start"
  },
  Text_134_314: {
    color: "rgba(112, 112, 112, 1)",
    fontSize: 18,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_134_315: {
    width: wp("10%"),
    minWidth: wp("10%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("15%"),
    justifyContent: "flex-start"
  },
  Text_134_315: {
    color: "rgba(112, 112, 112, 1)",
    fontSize: 14,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_134_316: {
    width: wp("12%"),
    minWidth: wp("12%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("20%"),
    justifyContent: "flex-start"
  },
  Text_134_316: {
    color: "rgba(112, 112, 112, 1)",
    fontSize: 14,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_134_317: {
    width: wp("14%"),
    minWidth: wp("14%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("27%"),
    justifyContent: "flex-start"
  },
  Text_134_317: {
    color: "rgba(112, 112, 112, 1)",
    fontSize: 16,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_134_318: {
    width: wp("6%"),
    minWidth: wp("6%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21%"),
    top: hp("3%"),
    justifyContent: "flex-start"
  },
  Text_134_318: {
    color: "rgba(112, 112, 112, 1)",
    fontSize: 14,
    fontWeight: "300",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_134_319: {
    width: wp("3%"),
    minWidth: wp("3%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("3%")
  },
  View_134_321: {
    width: wp("30%"),
    minWidth: wp("30%"),
    height: hp("34%"),
    minHeight: hp("34%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("133%"),
    top: hp("0%")
  },
  View_134_322: {
    width: wp("30%"),
    minWidth: wp("30%"),
    height: hp("34%"),
    minHeight: hp("34%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_134_323: {
    width: wp("11%"),
    minWidth: wp("11%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("10%"),
    justifyContent: "flex-start"
  },
  Text_134_323: {
    color: "rgba(112, 112, 112, 1)",
    fontSize: 18,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_134_324: {
    width: wp("10%"),
    minWidth: wp("10%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("15%"),
    justifyContent: "flex-start"
  },
  Text_134_324: {
    color: "rgba(112, 112, 112, 1)",
    fontSize: 14,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_134_325: {
    width: wp("12%"),
    minWidth: wp("12%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("20%"),
    justifyContent: "flex-start"
  },
  Text_134_325: {
    color: "rgba(112, 112, 112, 1)",
    fontSize: 14,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_134_326: {
    width: wp("14%"),
    minWidth: wp("14%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("27%"),
    justifyContent: "flex-start"
  },
  Text_134_326: {
    color: "rgba(112, 112, 112, 1)",
    fontSize: 16,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_134_327: {
    width: wp("6%"),
    minWidth: wp("6%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21%"),
    top: hp("3%"),
    justifyContent: "flex-start"
  },
  Text_134_327: {
    color: "rgba(112, 112, 112, 1)",
    fontSize: 14,
    fontWeight: "300",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_134_328: {
    width: wp("3%"),
    minWidth: wp("3%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("3%")
  },
  View_134_330: {
    width: wp("30%"),
    minWidth: wp("30%"),
    height: hp("34%"),
    minHeight: hp("34%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("165%"),
    top: hp("0%")
  },
  View_134_331: {
    width: wp("30%"),
    minWidth: wp("30%"),
    height: hp("34%"),
    minHeight: hp("34%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_134_332: {
    width: wp("11%"),
    minWidth: wp("11%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("10%"),
    justifyContent: "flex-start"
  },
  Text_134_332: {
    color: "rgba(112, 112, 112, 1)",
    fontSize: 18,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_134_333: {
    width: wp("10%"),
    minWidth: wp("10%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("15%"),
    justifyContent: "flex-start"
  },
  Text_134_333: {
    color: "rgba(112, 112, 112, 1)",
    fontSize: 14,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_134_334: {
    width: wp("12%"),
    minWidth: wp("12%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("20%"),
    justifyContent: "flex-start"
  },
  Text_134_334: {
    color: "rgba(112, 112, 112, 1)",
    fontSize: 14,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_134_335: {
    width: wp("15%"),
    minWidth: wp("15%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("27%"),
    justifyContent: "flex-start"
  },
  Text_134_335: {
    color: "rgba(112, 112, 112, 1)",
    fontSize: 16,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_134_336: {
    width: wp("6%"),
    minWidth: wp("6%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21%"),
    top: hp("3%"),
    justifyContent: "flex-start"
  },
  Text_134_336: {
    color: "rgba(112, 112, 112, 1)",
    fontSize: 14,
    fontWeight: "300",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_134_337: {
    width: wp("3%"),
    minWidth: wp("3%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("3%")
  },
  TouchableOpacity_95_125: {
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
  ImageBackground_95_126: {
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
  ImageBackground_95_127: {
    width: wp("5%"),
    height: hp("4%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  View_140_710: {
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
  View_140_711: {
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
  TouchableOpacity_140_712: {
    width: wp("3%"),
    height: hp("4%"),
    top: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19%")
  },
  TouchableOpacity_140_714: {
    width: wp("4%"),
    height: hp("4%"),
    top: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("77%")
  },
  TouchableOpacity_140_716: {
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
  ImageBackground_140_717: {
    width: wp("4%"),
    height: hp("3%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_140_719: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  View_95_43: {
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
  View_95_44: {
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
  ImageBackground_95_45: {
    width: wp("3%"),
    height: hp("4%"),
    top: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%")
  },
  ImageBackground_95_47: {
    width: wp("4%"),
    height: hp("4%"),
    top: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("83%")
  },
  TouchableOpacity_95_49: {
    width: wp("4%"),
    height: hp("3%"),
    top: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("91%")
  },
  View_95_53: {
    width: wp("7%"),
    minWidth: wp("7%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("47%"),
    top: hp("8%"),
    justifyContent: "flex-start"
  },
  Text_95_53: {
    color: "rgba(112, 112, 112, 1)",
    fontSize: 16,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  TouchableOpacity_95_57: {
    width: wp("4%"),
    height: hp("4%"),
    top: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%")
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
