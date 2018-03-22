{
  "targets": [
    {
      "target_name": "open-files-helper",
      "sources": [],
      "conditions": [
        ['OS=="win"', {"sources": ["platform/win32-helper.cpp"]}]
      ]
    }
  ]
}
