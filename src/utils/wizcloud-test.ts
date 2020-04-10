import { wizCloudCallApi } from "./wizCloud";

// tmpJurnalBatch
const trans0 = [
  {
    TransType: "חל",
    TransDebID: "30002",
    DebName: "סימפטיה שופ",
    TransCredID: "40001",
    CredName: "הכנסות ממכירה בארץ - כולל מעמ",
    Referance: "100",
    Description: "חשבונית",
    DueDate: "29/03/2018",
    ValueDate: "30/03/2018",
    suF: 1000,
    suFDlr: 0,
    CurrencyCode: "$",
    moves: [
      {
        AccountKey: "111",
        DebitCredit: "1",
        SuF: 1000,
        SuFDlr: "0",
      },
      {
        AccountKey: "40001",
        DebitCredit: "0",
        SuF: 847.46,
        SuFDlr: "0",
      },
      {
        AccountKey: "60001",
        DebitCredit: "0",
        SuF: 152.54,
        SuFDlr: "0",
      }
    ],
  },
];

const journaldata = {
  batchNo: 15,
  check: false,
  insertolastb: false,
  issue: true,
  rows: trans0,
};

// importIndexRecords
const trans1 = [
	{
    AccountKey: "1gilgilgil",
    AssignKey:"777",
    CostCode: "22",
    DeductionPrc:11,
		DeductionValid:"28/02/2019",
		FullName: "tutu123",
		SortGroup: "258"
	},
	{
		
    AccountKey: "8888123664",
    CostCode: "1",
		FullName: "8888 name new",
		SortGroup: "1234"
  },
  // {
  //   ItemKey: "2gilgilgil" 
  // }
];

const indexdata = { myindex: "acc", insertnew: true, rows: trans1 };

// docdata
const stock = {
  AccountKey: "20003",
  AccountName: "name acc 40001",
  Agent: "1",
  Details: "my doc details",
  DiscountPrc: "10",
  DocNumber: "1",
  DocumentID: "1",
  Osek874: "123456789",
  Phone: "",
  StockID: "0",
  Tftal: "0",
  ValueDate: "2019-11-30",
  Warehouse: "1",
  moves: [
    {
      Agent: "1",
      CurrencyCode: "$",
      Details: "my details 123",
      DiscountPrc: "5",
      ItemKey: "123",
      ItemName: "name item 123",
      Price: "1050",
      Quantity: "2",
      Rate: "3.7",
      Tftal: "2100",
      Warehouse: "1",
    },
    {
      ItemKey: "1202",
      ItemName: "name item 1202",
      Price: "20",
      Quantity: "5",
      Tftal: "100",
    },
  ],
};

const documentdata = { rows: stock, issueStock: false, deleteTemp: false };

// importBankPageRecords
const trans2 = [
  {
    AccountKey: "50001",
    CreditDebit: "0",
    DatF: "31/10/2019",
    Details: "trans details",
    Reference: "123",
    SuF: "-5445",
  },
  {
    AccountKey: "40001",
    CreditDebit: "1",
    DatF: "28/10/2019",
    Details: "trans details 111",
    Reference: "125",
    SuF: "55123",
  },
];

const bankdata = { rows: trans2 };

// exportDataRecords
const encryptReportData =
  "0c61e292d66a71326e011b089534ee146ef5c300a4bd922fa913e81043819cfd65e5bad0aa521389d787fedc0319361bbe84687b68c32689d751c4b8b38418306ea7685e60b601fac3d64b2728a1af5eedefbe544a9118d3e6b6541038bdacb0e2def1f49e921b53e01711b9bc26b391cf59fce4b4f790d2943cb4763717559b0efe64bc07f44a5e69a0aebbe26be4dfb6d294fb628989d06a6b667168eb7d0226375881b4f2e625093f958b84ab9e49f1d2b11a0b65018cf7c9851208f6259da1dfb57f0e90763fa536e6b584506c6d52c5670baed6c477743058bd933670130efcc9a4eda7c91baef1b4199daf830f81dbd8e88fb401a0a3edbab0a677ac2798ad7c633a4c509787ba94de35327f0a60ce5ec44f403eb23ba90c923fc74a30f5ed673946036bd7ce5cd28acbda983a6fe7c27bd720e8d5e717c6b52fdbebe6deedf32a26e00bf1897cc1deda1d06c01f3cd885ce2368022d88f4b6dce924f3d2043f054011fd547dddfceff41d4319615570a864849c4a862e71233a0cad8bc76cde972630e7116811636ff3398275956890583e14604d2b12dcff3c7e54ba7d05854e7a26d02df73ca3acdd5179b18a880c83610ef0aae878e07bf7553b470a288133f3b1264e38d56c9cceb1e8bbca98216855544082f03fd23fd89e93b8472a022f640760359657cb0682d6fbb73407f4a1cccf529a42feb9c958514cf9969b596a692cfb1d42c512e8f22d44d9986c38602cf7bdfe64675838179bdefcb6f03dc1407acdc3a1bd2b02df2b942378e0a94d52da064e4cd5d63a36d02df4e52818752f84f5543bf638ac1c8c016091948a7e522828c4689f4d2cdc502a415cbd11e6d01c9481514b652c56f3dabddb6b7c08ed402f287f39f3f37d254c5392a7cc54d8132038a701b7a375dbfb7ff855666ead7e8d7e2cca177812fa30f5a05179dbd2a07e72465317ec4d0aee8a0b2099f31f4b18a44767edf129bf4469f66e47ced7f28e0566483791cb0ee53bda2c18ad15aa9d39e354933f8b9b4f0d0b83069723ac4222ed2dda3c6948f4870b57f5220c82fdd23eef0951be1774b1fb78484f2c899ca735f28494677e56cc25a23665c354b90b7e499c26123f9db6733a94022f0d8940973b8baa20ac576d8085e5e2eb95247401de6cb1dcaee23466365204750eb1171be9e721f3269c2bdbc173bfdae209c77870610b728b3b163c2df92a1d3036dbb4c010dd4ff23dc15f156acc8cd41245ea957839e748ff36463f29cf37d05c5e9dc5428577f009662378ca3d737b1ae98cf333399fe6ad06d7e00ce9439cc14f2065ba262c773344c5d74b67dac62a113a14caa3f3ebb5228fb483060966369e4f10941231e80af6361d2d6988c7790128fced7d47862de581e57a34668fd2e55c6815dd817b5918c0e2adbc517c79a110942e5c08fd94bf165993627cc77730167eecdacc8db5d5d3f8d1536b8643c2cab2afc9b1f1a2869600aab98bb895aaeec450012072f82a82429f3e7458ce955c89a2e64ab59fe4644f597325796a0323c00f9d0817bd81829dcb4ab564a1d488db89c90e5f5184baac29172629ae228fa506c161afadfe2b456081edce6e53647af033e759d76e2e402b4921246839625d667e711c3d5403d8b2436d01573023e3f3f8b9fdddfa565774540179d6c3053aa49ecbcaad9f3685d86e373a96d11ae9394eff36bfbcf4562ecc0ec419e93e757b13c25ced0779a81ddde22486336623fb84ecae71863c0891fb0718705b7075c0f5badcb9a3b2d0cd447a488a46dab1685e40d1b6f74934a2fd0d5f5229736f99c3dcddb2fb8b9891ed4f5fedc23237d2fe6fc0d458ee9e9748c01012e596fead86ce7c732455ddbefedbf5cfe42582170d44206ce1d2c4fcaef22a0d02469b62d14be1b835607b01576912564e5c9390bbe5c55b3476612f533f6da18362c9a2ea19bc6a10811add62380af57f43ec58fea135f2e11b6c251c37936ff477ad3124b8cf57b54605ba1553933d5a3c60008b5416edd73dfb29ed4e26701a7ab93535941f42575c5800f2bd3b716446d4736bd301883a7053bcaae9afc0e13e04a7070ff3b23e24032347ae3d247a48634e498916ed50a6559cd0aecbeb161641ebb20650ee954a108db6324c8c67cdcd654321e90f6b389f67ca258b2b9a0a631af0cafbb0b60db432a867a97ae17fd3fded7f05c148fcc891b4453064fd15620954ada3478988c85159b5b365e4b4509e29f0d731fad158f512cdad76fc1c4e51bc347779f7241c66dd7f76d22d1f97462763f67a2606134a9448730b7ede4a7c7c28c13bdee35bdb25af397e419993da059678df6cfd07819c1755e054c3d89bd337eba511a2be7909b58aaabf75840f12d9f56d11c93f039ca4633166508acdf0d93853aaef04e69765e8e3b4116a44e5232eabee61a138e50b89dcf4afc3493efe10d24708d1818eefe4ff529314656df5235ee7acf3e78e4b435032f9534e6d4e6de99051e509ddbb8a06ffbe1ba28c4a2a39d951b04302f97cb6c5b2c7947b8dd4caa503a7474bb5c9b6541dcb0b013824c82c57254013aaf8110adc8945b63ec6b87b3b9b3f214a3724f92e6e155df76ed6bd1657714c737f162e0dcea42371a4624e060d9d4f92781ce2854d635d1e8925c3d68bc7c08c01c62fe58c7cbb5741b88b86807b084117cf8f78bb5dd156c3e496ea9e3dbe01a1978272cc63dc131427cb216a695f05cab9bdca324fe9d921f3e927dad276323cac0261e46f0082fb752ae0f0d8125e390bd891de467c0261c608102824ad7f2a16a4ddff9d6a6ccec0055d9e61c7061fece75a7b473806269a899dd4bcc92af61f61c1a4414d068ee90a10e78eeb2909f93aa01f068892b8c6aa5e7858dd2ddec7a84d4b06ca3d7217d799a209aa108ec06e4e01ed9ad4ab0c2865ac10d06be2f05133eb4b96c73d806ce93e9c09077a2a25deff4552fbd22cc3d36fbe0cd9ce6024399f64c6ede783fd63d5f2c809514f76e2cfc215abb4c07bbf500c4c829b893a88f3e45ac8959ea024c88e2caeccedd01ffe0efb8c26484112d57e4f0fb3701ba722f6c3f0585e95206feb88ebe7ac189e1b01f67b909cafa8b0870f691aa9fe3c737c7c1bd2dcd44940fbf1e05815a064619469f10363fa0fb13f24b20d3588ec35e0f110243ac863f33371b75a273c87654e7fab0903fcd2f612762abecf0d6cff7a0b23573c82da6c116b306f5d78d5330d4a0bcc19edbbdac019f7182fc2d9dd73d3e34e3a2279933c308df9b0ef4f8b35904f49160f1840033dad17f352afdca8b02171b82d7fbf0f7449907f3ad0472a7997a2abe8812c8c4551db285205949cfdac75ab104b0e045950d217e8e9894e24ceb6b38c85a86f8d1427ab2d311ebfa8c0379dc97d1ed67938d1389a470e46b9b3aba87c086a28797d602c9af1437fee06c76f94e5d9bfac600e2f40bdd03ba8134b16032fa81355a95d858b517e29d3352439371f6f3641c553048aa6de1c9cd1a3e70684f8c805b814bf847ca05e1454fc61187e437349af9fe37c7d6d8a8d8801bfcf0f40d10416e3407afe4aac9a19b0db09fe3d4ac4a287b92baa07c06911bdf77a73298eac623433db4832223b83ff7ebb879897bc3b9623a50626611056b50d4d354f74630d5fe0ca81af427af94c39e595910ce0f1abf22b21e2bf3ba0c93063d709ff45ecfa2617efe02d086a6c8d3a958abbc26a2b4928faaa12de45c9b58decdf3c6298b9fcfb54dd1e9e107670d94085c1fc8f5f5c5b8522858da7100614e297357ef6817c3c8a89867b0e38df0fc0b8e16602db536e75e8ba41715ff2dc070343e6218d53392a7f230cd2a6ec56dc8bb242b98bdb19934e1f976d4db726b9d13eec00770c98543802e7c5b646bca1d79a535bcdd9dbf4bb345233a907af031d1dd84728044ac8c97cf42465d7e9d43063d210008874b27f2e36bac6fc61c5f7d401f4a8bafb364afb25f6ca01dab2d9a3ff55ff34e49296f544493fa13dd95c4dea8e2421024085ad2c4986be262508bb2adcd68f5216fc451d5d210087d8da9a093b72461fa2444002329b27b92c36d77bc37060f5fdfaa278d1a5fcd57f140a56b0f74f1131a07d62f0fdc3d48fdde018615cbb7a03dedd4437702d8507ea0db61de25cbd570e33c74891244631179e4c0e73983b6f10322b43f0d867ffe7a72433c9516da05fe35fc84aca3db346dc2b82e16761882c020c6e04ffcec4ee6e30c43f3e112968c98098d59f25b005a188ac2eac6052cd80f92cf520fc00040043ccdc065cd0c848a9edb2f784d1cf412293cbc83ec64aec5fed8eca24f96e377d8dfe1c312bff26a6ebcc0f905885910900660863032900e94aa5eabc6ee40fb8618710d8cbb89bd24199f42bf67ce1d25d9614e32b2d55dc821b981cb3cb5fbffc0a10374a74305072589b49fe2108a1d950dda3d9a48a3eb6ce9259ccd4c702fe1ae27fd018a8cfc82930a7936da2f0e8f22f242dadd30a2c5dad7df6a7bb8fe3e1bd441bacdca6d52d1e2682271a70fe288be662870a9ee491cce9ab38bbf72eb1ad4e507a6f83598c697c5304ba1bf85355e496815c5e0e0ce5bc17836d193284ea8741ae8d440d569d78194d6ef0800b1ee0ae4d07b048478e0b4c694c017bb7a7378068871ddb72555fa25d99042e2029e4a44ed1134e444a024c392f0d9f9c36eed89a4bbc0c13e9f9861589088697f79199cd5a96c5119b5bc7bc4390e04802c77d08824d4b5af63d1c123a8f0b7448eeac76006c0983dbc221bf209117e37d47e89efb7cd9af29da950fd15a634d07d99df9f55c7f391b63a4ac190fb7d3d1743220f75f01bcc44786654f53e8fe2e2de5312d81846e9d8696a29f11827065025370dd7bf5f981125ef061137676c9e5dba83ca2745b1ba9a0629701c8e06f23260d7823597d27fc92f422046bc2a9258fcc64d9c66e611aac39b5f57906177c5bd3a6f230be7b2a8d7d39a5540b23b9e2132a8e30149b322b282446406ab4e357d77210534fbd52d054781b0c4421ed459fb3d932ecef6d3d3751c52cbd048d69efaa14fda21df5fed0cdce2b42f712ac0908c1564848e671ab5f2da03fc6da5cae5b96e4248e8319e8c59f31f1a14ad4e6a36ed52a2eabdf570da02bb778cf84a691b0704a0fcf3b85235653836b111f4d6004e76632bd35bc40cbee8da66eb63fbb2dfff48283f4b148d3cbe6da473ff45c98f62f21862fdc5814b906264136d17683c8a9f6105b0fc53f7998915fd4aecda79e5ffe869afccfcbbedc6e6bc9c33837a70f2cee231435d84d128e880e9f5a1d2c73197a877d7a7767dd9ba7e2ccacd80144ed9443acf1dc2868a954feff8e2e91bb45c4a16055d8598a7cc70eadd23a53df353542c30c151b8ebe32cf7ccaf7d816bfaa03c77fcec4bcaf0b1a870453d869a6191e6657c3b3a20c6cb941ca094c3b9b6e49088a66411f131a3b36fcbd29cc1aa058b4339b77228bb974e4c0d1c0e17dd719f5dc6be27e54cabfe77629e6c80cc8ad6fce091dc0b879add8b77b52e9dec3d713296357ad54a65c263642ca8fc90a5d794f111e348bb6beabab5f30c4b40fd47ae2e3110d5171e354a5987056449c9a48247ced1c6c2f2810d505fef580c8f053dfa53f07e02a9cc424b51ef881d3ac25fe596a25c4e807125c5cc1eb40cf7de40dee05bdf5610f345e4cf50855628fa4b753244c74becc2def103e2166b4303155e2f5f95213c0132bea75bcfc07e6fd022b81879a77ee5ae3d89b1f9e09bdae4c101fa65143259e0e4bf5918d5bc4d34905c073699bdec4ce89f07a69ba2dde83f7866de1c0065bf8b0dc6bc0f3c44ab7b5abf77aed0e633a669bcaaede9899ced462a4fc3e1f5bc81490d826d63f31ed6904b6081c46c18416444059942d1787354dea82898a63bcd4bd6d2162f84b0bb87d0e45a484c12c798739e053b70c65ad0f7f8fed39de5a95492c0e0e1a061d702ff325deeabd6b6aba428c026b0aefe316fcd2821ff5a50c467a3aae7a23da3aff54f761ad7281c0b6ae2b711079f506bb0b794abee25197760acff5681090666b927ea7856c29b4f1faad7a1dc1b9dbf0aa4a3ac2b21a8318adea44d3270c2adf401ae1788bbb4e2f6ca2c3ccf8855e5fb427ba1f244a030adfbb56d07ecce10826b0ec1fafa030348340f77a0006d48c546aa5ac95ee9175882304fd8945c5c97381b50f0cf4149f1949528ec1c43f807d1d5f51e4059bc79ad9eeab74881933fafb6344cb5ec475446191bda510e08e256c802057473bfbe811e57d94917627b18852a5d6f5cd3c551e278e86d29469527ba19ec99f793388dad3c6bc5581ff011d638147cbe00b899141da00cacca89a700188c39b8a813f953c34b194610cf8492378c422dd5984ecd538a1ee0adcbf331c8947bdb50813eb7f372f3de8a36e766b89d74dbe3d004ea5bfd2f83df6c1a95fdcdef5b59445a2c7c6fb6f45ff871bfa3af640d62d69a1030dcaf8599c89acd36f6ea64a1e5ccc81ae5bd18ecf91cade61460e6b827274ecbee713bdbc8c90470e7305cf46635a363d4c3f47eb1952e312a74c2e1f7d348dc3dfb5a11101287ba86e5d5b850863068b8fac3d364def206af7c4fee07e45ea2b8d6752a80590639c51f15de9543004f801f5385b409843a9c0bb8e86fbb96a3f61eb945a3cc42136e93ca9a1f6ac1e62cc31dee40c76368fe6ea5760bdfddf6135d74e524a263ddffedc4b13285271eb0be7336dc6afceb185ac421b76bf4e1ed67e56f08f7f2ff75e5c0ad275d9d60834eeeba7a749a20970d800d34b6639bd95aa2edd6707018acfb0aa3f02a6f90af7bfdcb4a7faecf7695d4e34ff6aa55a6b95b99326a37b06b4b3f4d8dd90b69aa0107647efb4fec947ab7f0ca0eca450de34f5fb67546035515b5e47a01ca7284bd95483a007e0b97c25b26b719573b950bb648544dc905ac94d53eda63b9e89d9118a5b3092325ebd7ae7d023f578e59d687a2561891d80e508d0222885ad09e00b25ca8c6eb54f3053298866cd01574c9ec4d10f05e58de90b506ff470e20e00cdf3921aff318b6e35a905aaa8e1c3b41745b3a63bfdede55b8d8c2dac368fce7b369d887b72d7c57313799d508393ec4fa13e5abf84d197835a8f22d211d15be8383ca85ef4cb6cc75b7744fe9f79abbba84fe8fa0fbbc7e15272e4646291afe7dd572272a5207a95a256d363b89221c6f8ae5e028a8d2da7cccb137b15099aa8c57b1dd6f725f9173a7e9beef9cf6c1def877b4c074e9b75eebe43fb429d01e54f91db0ffdb75fedc230935ca137f7b554b42100cf5f5392e87f7ddadb16edb8edc50427107a50589f61d2ce759549e814f752cc0b6f171fec5737a4eb7cbcfadcae5b7bbcccb0455ce2f60b88e848ab7656ec973e2ab4fa467be8812680abf9b52607513eeb0b89431f34c056324251818865212ce8f85f2c5744e295c68bed327c429cf5c32416d5fe1745c62ee76ed72db1b7b0b5232876620efec3d1961c77e6593f1a36f5f5e6a3e248229bc457b3f5694e204471f00a3040b8b4bddbe255a8dd5450910ee83734150f06";
const paramsData = [];

const exportdata = { datafile: encryptReportData, parameters: paramsData };

// export

const method = "jtransApi/tmpBatch";
const data = journaldata;

// const method = "IndexApi/importIndex";
// const data = indexdata;

// const method = "invApi/createDoc";
// const data = documentdata;

// const method = "BankPagesApi/importBankPage";
// const data = bankdata;

// const method = "ExportDataApi/exportData";
// const data = exportdata;

export async function wizCloudTest() {
  let res;
  await wizCloudCallApi(method, data).then((r) => (res = r));
  // console.log("res:::::::",res);

  return await res;
}
